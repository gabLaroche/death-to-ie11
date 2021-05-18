import reasons from "../data/reasons";
import websites from "../data/websites";

function populateList(elemId, list) {
  const dataList = list.sort((elemA, elemB) => (elemA.label.toLowerCase() > elemB.label.toLowerCase()));
  const listElem = document.getElementById(elemId);

  dataList.forEach((element) => {
    if (element.url && element.label) {
      const listItemElem = document.createElement("a");
      listItemElem.setAttribute("href", element.url);
      listItemElem.setAttribute("rel", "noreferrer");
      listItemElem.setAttribute("target", "_blank");
      listItemElem.textContent = `${element.label} ${
        element.description || ""
      }`;
      listElem.appendChild(listItemElem);
    }
  });
}

export default function populateReasonsAndWebsites() {
  populateList("reasons", reasons.list);
  populateList("websites", websites.list);
}
