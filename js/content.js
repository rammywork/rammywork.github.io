// Set Language Content :
var dict_eng = new Object();
var dict_vn = new Object();
var body_html;

var dict_eng = {};
var dict_vn = {};

dict_eng["Menu1"] = "Home";
dict_eng["Menu2"] = "About";
dict_eng["Menu3"] = "Services";
dict_eng["Menu4"] = "Team";
dict_eng["Menu5"] = "Contact";

dict_eng["Slider1_Title1"] = "The Best Logistics Service Provider in Vietnam";
dict_eng["Slider1_Title2"] = "Leading company in shipping and customs services";
dict_eng["Slider2_Title1"] = "Vision and Mission";
dict_eng["Slider2_Title2"] =
  "Gia Binh Logistics desires to become a leading provider of customs clearance and transportation services in Vietnam.";
dict_eng["Slider3_Title1"] = "We do what we say";
dict_eng["Slider3_Title2"] = "Our goal is customer satisfaction";

function get(name) {
  if (
    (name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
      location.search
    ))
  )
    return decodeURIComponent(name[1]);
}

$(document).ready(function() {
  setTimeout(filldata, 2000);
});

function filldata() {
  dict = dict_vn;
  if (get("ln") == "eng") {
    dict = dict_eng;
  } else if (get("ln") == "test") {
    dict = none;
  }

  for (var key in dict) {
    htmlElement = document.getElementById(key);
    if (htmlElement) document.getElementById(key).innerHTML = dict[key];
  }
}

function to_Eng() {
  url = window.location.href;
  url = url.replace(window.location.search, "");
  window.location.href = url + "?ln=eng";
}

dict_vn["Menu1"] = "HomeVN";
dict_vn["Menu2"] = "AboutVN";
dict_vn["Menu3"] = "ServicesVN";
dict_vn["Menu4"] = "TeamVN";
dict_vn["Menu5"] = "ContactVN";

function to_Vn() {
  url = window.location.href;
  url = url.replace(window.location.search, "");
  window.location.href = url + "?ln=vn";
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
