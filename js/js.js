const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['https://segredosdomundo.r7.com/wp-content/uploads/2020/09/curiosidades-sobre-a-vida-50-fatos-interessantes-sobre-o-universo-e-os-humanos.png', 'https://image2.slideserve.com/5088831/slide42-l.jpg','https://vcx.solutions/wp-content/uploads/2022/02/IMAGEMTecnologia-Informacao-e-Tecnologi-768x380.png', 'https://3.bp.blogspot.com/-HdZWWm9dhCk/V82zCspFBPI/AAAAAAAAAFA/Y5i_81h7EdoyKddfjQdcOQhw5SFpKdzHQCLcB/s1600/linha%2Bdo%2Btempo%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2BNoemi.jpg', 'https://i.pinimg.com/originals/25/1f/be/251fbe63af99bfc5d1723ee37f5c837f.jpg','https://img.jaenoticia.com.br/mXK1L7_g9tXInf8Zhs24x2YqHHo=/736x431/smart/s3.jaenoticia.com.br/uploads/imagens/blog_1477.jpeg'];
img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
  