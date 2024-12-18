import { marked } from 'marked';

export class RichTextEditor {
  constructor(elementId, options = {}) {
    this.element = document.getElementById(elementId);
    this.options = {
      previewDelay: 500,
      height: '400px',
      ...options
    };
    
    this.setupEditor();
  }

  setupEditor() {
    const container = document.createElement('div');
    container.className = 'rich-text-editor grid grid-cols-2 gap-4';
    
    // Editor
    this.editor = document.createElement('textarea');
    this.editor.className = 'w-full p-4 border rounded-lg font-mono';
    this.editor.style.height = this.options.height;
    
    // Preview
    this.preview = document.createElement('div');
    this.preview.className = 'prose prose-sm max-w-none p-4 border rounded-lg overflow-auto';
    this.preview.style.height = this.options.height;
    
    container.appendChild(this.editor);
    container.appendChild(this.preview);
    
    this.element.parentNode.replaceChild(container, this.element);
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    let timeout;
    this.editor.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => this.updatePreview(), this.options.previewDelay);
    });
  }

  updatePreview() {
    const markdown = this.editor.value;
    const html = marked(markdown);
    this.preview.innerHTML = html;
  }

  getValue() {
    return this.editor.value;
  }

  setValue(value) {
    this.editor.value = value;
    this.updatePreview();
  }
}