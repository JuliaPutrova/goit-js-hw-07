
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
};

const onInputSubmit = () => {
    if (refs.input.value.length === 0) {
        refs.span.textContent = 'незнакомец';
    }
    else {
        refs.span.textContent = refs.input.value
    }
}

refs.input.addEventListener("input", onInputSubmit);



