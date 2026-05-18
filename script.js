// Data for the 10 featured books
const booksData = [
    {
        id: 1,
        title: "The Obsidian Echo",
        author: "Aria Vance",
        description: "A philosophical journey through a world where memories are traded as currency.",
        cover: "assets/book_cover_1.png",
        likes: 342,
        comments: 12
    },
    {
        id: 2,
        title: "Chronicles of the Forgotten",
        author: "Elias Thorne",
        description: "Unearthing the lost histories of an empire buried beneath the stars.",
        cover: "assets/book_cover_2.png",
        likes: 289,
        comments: 8
    },
    {
        id: 3,
        title: "Whispers in the Glass",
        author: "Helena Rostova",
        description: "A chilling mystery set in a Victorian mansion entirely made of mirrors.",
        cover: "assets/book_cover_1.png",
        likes: 512,
        comments: 45
    },
    {
        id: 4,
        title: "The Alchemist's Daughter",
        author: "Julian Blackwood",
        description: "Science and magic collide in this tale of ambition and legacy.",
        cover: "assets/book_cover_2.png",
        likes: 198,
        comments: 3
    },
    {
        id: 5,
        title: "Midnight at the Observatory",
        author: "Caleb Sterling",
        description: "When the stars aligned, the world paused. A story of cosmic consequence.",
        cover: "assets/book_cover_1.png",
        likes: 420,
        comments: 21
    },
    {
        id: 6,
        title: "Silk and Shadow",
        author: "Mei Lin",
        description: "An assassin trained in the art of the loom must weave her own destiny.",
        cover: "assets/book_cover_2.png",
        likes: 375,
        comments: 15
    },
    {
        id: 7,
        title: "The Clockwork Nightingale",
        author: "Arthur Pendelton",
        description: "A mechanical bird holds the key to saving a dying steampunk metropolis.",
        cover: "assets/book_cover_1.png",
        likes: 215,
        comments: 9
    },
    {
        id: 8,
        title: "A Symphony of Embers",
        author: "Valeria Rossi",
        description: "Music that conjures fire and the maestro who lost control of the flame.",
        cover: "assets/book_cover_2.png",
        likes: 640,
        comments: 55
    },
    {
        id: 9,
        title: "The Last Cartographer",
        author: "Desmond Miles",
        description: "Mapping the edges of a world that is slowly dissolving into nothingness.",
        cover: "assets/book_cover_1.png",
        likes: 180,
        comments: 4
    },
    {
        id: 10,
        title: "Crown of Frost",
        author: "Isabella Winter",
        description: "A dynasty built on ice faces its first summer in a thousand years.",
        cover: "assets/book_cover_2.png",
        likes: 522,
        comments: 38
    }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Render Books
    const booksContainer = document.getElementById('books-container');
    
    booksData.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover" class="book-cover" onerror="this.src='https://via.placeholder.com/300x400/121212/d4af37?text=Book+Cover'">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-desc">${book.description}</p>
                <div class="book-actions">
                    <button class="btn-read">Read Free</button>
                    <div class="interaction-btns">
                        <button class="like-btn" data-id="${book.id}">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button class="comment-btn" data-id="${book.id}">
                            <i class="fa-regular fa-comment"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        booksContainer.appendChild(bookCard);
    });

    // Like Button Interaction
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                // Optional: add a small pop animation
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => icon.style.transform = 'scale(1)', 200);
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    });

    // Modal Interaction
    const modal = document.getElementById('comment-modal');
    const closeBtn = document.querySelector('.close-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const modalTitle = document.getElementById('modal-book-title');

    commentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            const book = booksData.find(b => b.id === bookId);
            
            modalTitle.textContent = `Discussion: ${book.title}`;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
