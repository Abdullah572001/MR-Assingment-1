
const remove = () =>{
    const allPageBtn = document.querySelectorAll('.page-btn');
    allPageBtn.forEach(btn => {
        btn.classList.remove('text-blue-600');
    });
}

const homeToggle = (btnName) => {
    document.getElementById('main-2').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');

    remove();

    document.getElementById(btnName).classList.add('text-blue-600');
}

const removeActiveFromPage = (btnName) => {
    document.getElementById('main').classList.add('hidden');
    document.getElementById('main-2').classList.remove('hidden');

    remove();

    document.getElementById(btnName).classList.add('text-blue-600');
}

const removeActiveFromCategory = () => {
    const allCategoryBtn = document.querySelectorAll('.category-btn');
    allCategoryBtn.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-gray-500');
    })
}

// loader adding and removing
const loader = Boolean =>{
    const loaderSection = document.getElementById('loader');
    if(Boolean){
        loaderSection.classList.remove('hidden');
        document.getElementById('products-container').classList.add('hidden');
    } else {
        loaderSection.classList.add('hidden');
        document.getElementById('products-container').classList.remove('hidden');
    }
}