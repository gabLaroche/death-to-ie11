import reasons from "../data/reasons";
import websites from "../data/websites";

function populateList(elemId, data) {
    const dataList = data.list;
    const listElem = document.getElementById(elemId);

    dataList.forEach(element => {
        if (element.url && element.label) {
            const listItemElem = document.createElement('li');
            listItemElem.innerHTML = `<a href="${element.url}" rel="noreferrer" target="_blank">${element.label}</a> ${element.description ? element.description : ''}`;
            listElem.appendChild(listItemElem);
        }
    });
}

export default function populateReasonsAndWebsites() {
    populateList('reasons', reasons);
    populateList('websites', websites);
}
