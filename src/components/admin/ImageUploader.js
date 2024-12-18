import { uploadImage } from '../../services/imageService.js';

export class ImageUploader {
  constructor(elementId, onUpload) {
    this.element = document.getElementById(elementId);
    this.onUpload = onUpload;
    this.setupUploader();
  }

  setupUploader() {
    const container = document.createElement('div');
    container.className = 'image-uploader space-y-4';
    
    // Preview
    this.preview = document.createElement('div');
    this.preview.className = 'w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center';
    
    // Input
    this.input = document.createElement('input');
    this.input.type = 'file';
    this.input.accept = 'image/*';
    this.input.className = 'hidden';
    
    // Upload button
    const button = document.createElement('button');
    button.textContent = 'Subir Imagen';
    button.className = 'px-4 py-2 bg-[#FF5F57] text-white rounded-lg hover:bg-[#ff4f47] transition-colors';
    
    container.appendChild(this.preview);
    container.appendChild(this.input);
    container.appendChild(button);
    
    this.element.parentNode.replaceChild(container, this.element);
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.input.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      try {
        const url = await uploadImage(file);
        if (this.onUpload) this.onUpload(url);
        this.showPreview(url);
      } catch (error) {
        console.error('Error:', error);
        alert('Error al subir la imagen');
      }
    });
  }

  showPreview(url) {
    this.preview.innerHTML = `
      <img src="${url}" alt="Preview" class="max-h-full max-w-full object-contain">
    `;
  }
}