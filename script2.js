const dev1 = document.querySelector('.dev1');
const dev2 = document.querySelector('.dev2');
const dev3 = document.querySelector('.dev3');
const dev4 = document.querySelector('.dev4');
const dev5 = document.querySelector('.dev5');

const hover1 = document.querySelector('.hover1');
const hover2 = document.querySelector('.hover2');
const hover3 = document.querySelector('.hover3');
const hover4 = document.querySelector('.hover4');
const hover5 = document.querySelector('.hover5');

const sobreMim1 = document.querySelector('.sobreMim1');
const sobreMim2 = document.querySelector('.sobreMim2');
const sobreMim3 = document.querySelector('.sobreMim3');
const sobreMim4 = document.querySelector('.sobreMim4');
const sobreMim5 = document.querySelector('.sobreMim5');


dev1.onclick = function(){
    dev2.classList.remove('active');
    hover2.classList.remove('active');
    sobreMim2.classList.remove('active');

    dev3.classList.remove('active');
    hover3.classList.remove('active');
    sobreMim3.classList.remove('active');

    dev4.classList.remove('active');
    hover4.classList.remove('active');
    sobreMim4.classList.remove('active');

    dev5.classList.remove('active');
    hover5.classList.remove('active');
    sobreMim5.classList.remove('active');

    dev1.classList.add('active');
    hover1.classList.add('active');
    sobreMim1.classList.add('active');
};

dev2.onclick = function(){
    dev1.classList.remove('active');
    hover1.classList.remove('active');
    sobreMim1.classList.remove('active');

    dev3.classList.remove('active');
    hover3.classList.remove('active');
    sobreMim3.classList.remove('active');

    dev4.classList.remove('active');
    hover4.classList.remove('active');
    sobreMim4.classList.remove('active');

    dev5.classList.remove('active');
    hover5.classList.remove('active');
    sobreMim5.classList.remove('active');

    dev2.classList.add('active');
    hover2.classList.add('active');
    sobreMim2.classList.add('active');
};

dev3.onclick = function(){
    dev2.classList.remove('active');
    hover2.classList.remove('active');
    sobreMim2.classList.remove('active');

    dev1.classList.remove('active');
    hover1.classList.remove('active');
    sobreMim1.classList.remove('active');

    dev4.classList.remove('active');
    hover4.classList.remove('active');
    sobreMim4.classList.remove('active');

    dev5.classList.remove('active');
    hover5.classList.remove('active');
    sobreMim5.classList.remove('active');

    dev3.classList.add('active');
    hover3.classList.add('active');
    sobreMim3.classList.add('active');
};

dev4.onclick = function(){
    dev2.classList.remove('active');
    hover2.classList.remove('active');
    sobreMim2.classList.remove('active');

    dev3.classList.remove('active');
    hover3.classList.remove('active');
    sobreMim3.classList.remove('active');

    dev1.classList.remove('active');
    hover1.classList.remove('active');
    sobreMim1.classList.remove('active');

    dev5.classList.remove('active');
    hover5.classList.remove('active');
    sobreMim5.classList.remove('active');

    dev4.classList.add('active');
    hover4.classList.add('active');
    sobreMim4.classList.add('active');
};

dev5.onclick = function(){
    dev2.classList.remove('active');
    hover2.classList.remove('active');
    sobreMim2.classList.remove('active');

    dev3.classList.remove('active');
    hover3.classList.remove('active');
    sobreMim3.classList.remove('active');

    dev4.classList.remove('active');
    hover4.classList.remove('active');
    sobreMim4.classList.remove('active');

    dev1.classList.remove('active');
    hover1.classList.remove('active');
    sobreMim1.classList.remove('active');

    dev5.classList.add('active');
    hover5.classList.add('active');
    sobreMim5.classList.add('active');
};