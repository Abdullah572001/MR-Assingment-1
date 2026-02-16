
const removeActiveFromPage = (btnName) => {
    document.getElementById('main').classList.add('hidden');
    document.getElementById('main-2').classList.remove('hidden');

    const allPageBtn = document.querySelectorAll('.page-btn');
    allPageBtn.forEach(btn => {
        btn.classList.remove('text-blue-600');
    });

    document.getElementById(btnName).classList.add('text-blue-600');
}

const removeActiveFromCategory = () => {
    const allCategoryBtn = document.querySelectorAll('.category-btn');
    allCategoryBtn.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-gray-500');
    })
}