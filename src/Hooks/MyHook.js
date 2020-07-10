export function dateToStr(str) {
  if (!str) {
    return "Unknown";
  }
  let dt = new Date(str);
  let mon = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "April",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return dt.getDate() + " " + mon[dt.getMonth()] + " " + dt.getFullYear();
}

export function dateDiffYear(s1, s2) {
  let d1 = new Date(s1);
  let d2 = s2 ? new Date(s2) : new Date();
  return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24 * 365));
}
export function stripHtml(html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export function openNewTab(url) {
  const win = window.open(url, "_blank");

  win.focus();
}
