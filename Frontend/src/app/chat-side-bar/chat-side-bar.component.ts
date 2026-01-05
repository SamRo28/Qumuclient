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

    // Sidebar width
    width: number = 400; // Default width
    minWidth: number = 300;
    maxWidth: number = 800;
    isResizing: boolean = false;
    startX: number = 0;
    startWidth: number = 0;

    constructor(
        private statisticsService: StatisticsService,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        if (this.initialAnalysis) {
            this.addMessage('assistant', this.initialAnalysis);
        }
    }

    // Helper to add message
    addMessage(role: 'user' | 'assistant', content: string) {
        const msg: ChatMessage = { role, content };
        if (role === 'assistant') {
            // Parse Markdown for assistant
            // marked.parse returns string | Promise<string>. safeHtml expects string.
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

    // Resizing Logic
    startResizing(event: MouseEvent) {
        this.isResizing = true;
        this.startX = event.clientX;
        this.startWidth = this.width;
        event.preventDefault(); // Prevent text selection
    }

    @HostListener('window:mousemove', ['$event'])
    resize(event: MouseEvent) {
        if (!this.isResizing) return;

        const dx = this.startX - event.clientX; // Moving left increases width
        const newWidth = this.startWidth + dx;

        if (newWidth >= this.minWidth && newWidth <= this.maxWidth) {
            this.width = newWidth;
        }
    }

    @HostListener('window:mouseup')
    stopResizing() {
        this.isResizing = false;
    }
}
