let container = document.querySelector('.container');

let p = document.querySelector('p');

let subBtn = document.querySelector('.sub');

let darkMoIcon = document.querySelector('.fa-moon');

let slide = document.querySelector('.slide');

let lightMoIcon = document.querySelector('.fa-sun');

let quotes = [
    '“Be yourself; everyone else is already taken.”― Oscar Wilde ',
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe ",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein ",
    '“So many books, so little time.”― Frank Zappa ',
    '“So many books, so little time.”― Frank Zappa ',
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch ",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”― William W. Purkey ",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss ",
    '“You only live once, but if you do it right, once is enough.”― Mae West',
    '“Be the change that you wish to see in the world.”― Mahatma Gandhi ',
    "“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost ",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”― J.K. Rowling, Harry Potter and the Goblet of Fire ",
    '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”― Albert Camus ',
    "“If you tell the truth, you don't have to remember anything.”― Mark Twain ",
    '“Friendship ... is born at the moment when one man says to another "What ! You too ? I thought that no one but myself . . .”― C.S. Lewis',
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou ",
    '“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard ',
    'كن التغير الذي تريد أن تراه في العالم',
    'لا يوجد طريق مختصر إلى مكان يستحق الذهاب إليه',
    ' “يمكن أن تحكم الناس بالخوف والقمع ، لكن الخائفين لايمكن ان ينتصروا في حرب ، في ساحة الحرب يجب أن يكونوا أحراراً” ',
    ' “من العسير على نفسي أن أتصور الجمال غير مقترن بالفضيلة، الجمال الحق والفضيلة الحقة شيئ واحد” ',
    '“Language is the key to the heart of people.”― Ahmed Deedat ',
    ' “الشر الناتج عن سبب كبير لأجدر بالتقدير من شر نشأ عن سبب تافه حقير” ',
    '“If I could talk it like Dahoum, you would never be tired of listening to me.”― T. E. Lawrence',
    ' “في قصص حلو تبقى بالقلب وما تنكتب عوراق ولا تنقال لحدا... قصص مش لحدا غيرك...” ',
];

subBtn.addEventListener('click', function () {
    let GenQoute = Math.floor(Math.random() * quotes.length);
    p.textContent = quotes[GenQoute];
});

window.onload = function () {
    let GenQoute = Math.floor(Math.random() * quotes.length);
    p.textContent = quotes[GenQoute];
    if (window.localStorage.length > 0) {
        slide.style.width = window.localStorage.getItem('slide');
        subBtn.style.backgroundColor = window.localStorage.getItem('main');
        container.style.backgroundColor = window.localStorage.getItem('main');
        container.style.color = window.localStorage.getItem('color');
        lightMoIcon.classList.remove('active');
        darkMoIcon.style.display = 'none';
    }
};

darkMoIcon.addEventListener('click', function () {
    window.localStorage.setItem('slide', `100%`);
    window.localStorage.setItem('main', '#15202B');
    window.localStorage.setItem('color', '#fff');
    window.localStorage.setItem('none', 'none');
    darkMoIcon.style.backgroundColor = 'white';
    darkMoIcon.style.color = '#1d2a35';
    slide.style.width = `100%`;
    subBtn.style.backgroundColor = '#15202B';
    container.style.backgroundColor = '#15202B';
    container.style.color = '#fff';
    darkMoIcon.classList.add('active');
    darkMoIcon.style.display = 'none';
    lightMoIcon.classList.remove('active');
});

lightMoIcon.addEventListener('click', function () {
    if (!darkMoIcon.classList.contains('active') || darkMoIcon.classList.contains('active')) {
        slide.style.width = `0%`;
        subBtn.style.backgroundColor = '#1d2a35';
        container.style.backgroundColor = '#eee';
        container.style.color = 'black';
        lightMoIcon.classList.add('active');
        darkMoIcon.style.display = 'block';
        darkMoIcon.style.backgroundColor = '#1d2a35';
        darkMoIcon.style.color = 'white';
        window.localStorage.clear();
    }
});
