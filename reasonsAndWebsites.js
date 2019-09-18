async function getJson(filePath) {
    return await fetch(`./${filePath}.json`)
    .then(function(response) {
        return response.json();
    })
}

async function populateList(elemId) {
    const jsonObj = await getJson(elemId);
    const jsonList = jsonObj.list;
    const listElem = document.getElementById(elemId);

    jsonList.forEach(element => {
        if (element.url && element.label) {
            const listItemElem = document.createElement('li');
            listItemElem.innerHTML = `<a href="${element.url}" rel="noreferrer" target="_blank">${element.label}</a> ${element.description ? element.description : ''}`;
            listElem.appendChild(listItemElem);
        }
    });
}

function init() {
    populateList('reasons');
    populateList('websites');
}

(function () {
	init();
}());