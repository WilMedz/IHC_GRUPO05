document.addEventListener('DOMContentLoaded', () => {
    const recentSearchesList = document.getElementById('recentSearches');
    const deleteAllButton = document.querySelector('.btn-delete-all');

    // 1. Eliminar elementos individuales
    if (recentSearchesList) {
        recentSearchesList.addEventListener('click', (event) => {
            if (event.target.classList.contains('close-icon')) {
                const listItem = event.target.closest('li');
                if (listItem) {
                    listItem.remove(); 
                }
            }
        });
    }

    // 2. Eliminar todos (para recent_searches.html)
    if (deleteAllButton && recentSearchesList) {
        deleteAllButton.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres eliminar todas las búsquedas recientes?')) {
                recentSearchesList.innerHTML = ''; 
            }
        });
    }
});