import reasons from "../data/reasons";
import websites from "../data/websites";

function populateList(elemId, data) {
  const dataList = data.list;
  const listElem = document.getElementById(elemId);

  dataList.forEach((element) => {
    if (element.url && element.label) {
      const listItemElem = document.createElement("a");
      listItemElem.setAttribute("href", element.url);
      listItemElem.textContent = `${element.label} ${
        element.description || ""
      }`;
      listElem.appendChild(listItemElem);
    }
  });
}

export default function populateReasonsAndWebsites() {
  populateList("reasons", reasons);
  populateList("websites", websites);
}
