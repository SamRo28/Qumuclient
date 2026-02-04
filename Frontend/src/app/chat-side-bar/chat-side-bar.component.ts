import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild, HostListener } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    rendered?: SafeHtml; // HTML representation
}

@Component({
    selector: 'app-chat-side-bar',
    templateUrl: './chat-side-bar.component.html',
    styleUrls: ['./chat-side-bar.component.css']
})
export class ChatSideBarComponent implements OnInit {
    @Input() conversationId: string | null = null;
    @Input() initialAnalysis: string | null = null;
    @Output() close = new EventEmitter<void>();

    chatHistory: ChatMessage[] = [];
    newMessage: string = '';
    isSendingMessage: boolean = false;

    // Modal State
    width: number = 400;
    height: number = 500;
    minWidth: number = 300;
    minHeight: number = 300;
    top: number = 100;
    left: number = 100;

    // Dragging State
    isDragging: boolean = false;
    dragStartX: number = 0;
    dragStartY: number = 0;
    initialLeft: number = 0;
    initialTop: number = 0;

    // Resizing State
    isResizing: boolean = false;
    resizeStartX: number = 0;
    resizeStartY: number = 0;
    initialWidth: number = 0;
    initialHeight: number = 0;

    constructor(
        private statisticsService: StatisticsService,
        private sanitizer: DomSanitizer,
        private el: ElementRef // Inject ElementRef to get window size if needed, though window object is fine
    ) { }

    ngOnInit(): void {
        // Center the modal initially
        this.left = (window.innerWidth / 2) - (this.width / 2);
        this.top = (window.innerHeight / 2) - (this.height / 2);

        // Ensure it's not negative
        if (this.left < 0) this.left = 20;
        if (this.top < 0) this.top = 20;

        if (this.initialAnalysis) {
            this.addMessage('assistant', this.initialAnalysis);
        }
    }

    // Helper to add message
    addMessage(role: 'user' | 'assistant', content: string) {
        const msg: ChatMessage = { role, content };
        if (role === 'assistant') {
            const html = marked.parse(content, { async: false }) as string;
            msg.rendered = this.sanitizer.bypassSecurityTrustHtml(html);
        }
        this.chatHistory.push(msg);
    }

    sendMessage() {
        if (!this.newMessage.trim() || !this.conversationId || this.isSendingMessage) return;

        const userMsg = this.newMessage.trim();
        this.addMessage('user', userMsg);
        this.newMessage = '';
        this.isSendingMessage = true;

        this.statisticsService.chatQuestion(this.conversationId, userMsg).subscribe({
            next: (res) => {
                this.addMessage('assistant', res.response);
                this.isSendingMessage = false;
            },
            error: (err) => {
                console.error('Error sending message', err);
                this.addMessage('assistant', "Error getting response. Please try again.");
                this.isSendingMessage = false;
            }
        });
    }

    onClose() {
        this.close.emit();
    }

    // --- Dragging Logic ---
    startDragging(event: MouseEvent) {
        // Only trigger if clicking the header itself, not buttons inside it
        if ((event.target as HTMLElement).closest('button')) return;

        this.isDragging = true;
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;
        this.initialLeft = this.left;
        this.initialTop = this.top;
        event.preventDefault();
    }

    // --- Resizing Logic ---
    startResizing(event: MouseEvent) {
        this.isResizing = true;
        this.resizeStartX = event.clientX;
        this.resizeStartY = event.clientY;
        this.initialWidth = this.width;
        this.initialHeight = this.height;
        event.preventDefault();
        event.stopPropagation(); // Prevent drag start
    }

    @HostListener('window:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (this.isDragging) {
            const dx = event.clientX - this.dragStartX;
            const dy = event.clientY - this.dragStartY;
            this.left = this.initialLeft + dx;
            this.top = this.initialTop + dy;
        } else if (this.isResizing) {
            const dx = event.clientX - this.resizeStartX;
            const dy = event.clientY - this.resizeStartY;

            const newWidth = this.initialWidth + dx;
            const newHeight = this.initialHeight + dy;

            if (newWidth >= this.minWidth) this.width = newWidth;
            if (newHeight >= this.minHeight) this.height = newHeight;
        }
    }

    @HostListener('window:mouseup')
    stopInteraction() {
        this.isDragging = false;
        this.isResizing = false;
    }
}
