function showLoading(){

    const loading = document.createElement('div')
    loading.classList.add('loading')

    const label = document.createElement('label')
    label.classList.add('spinner-border')
    loading.appendChild(label)
    document.querySelector('.container-loading').appendChild(loading)

    setTimeout(() => hideLoading(), 2000);

}

function hideLoading(){
    document.querySelector('.loading').outerHTML = ''

    setTimeout(() => showLoading(), 2000);

}

showLoading()