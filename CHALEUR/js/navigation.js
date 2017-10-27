"use strict";

function openNav(){
  document.getElementById('mobile-nav').style.height ="100%";
}

function closeNav(){
  document.getElementById('mobile-nav').style.height ="0%";
}

function openSearch(){
  document.getElementById('searchpage').style.height ="100%";
}

function closeSearch(){
  document.getElementById('searchpage').style.height ="0%";
}

function gotocandle(){

  window.location.href = 'products.html';
  document.getElementById('searchpage').style.height ="0%";
}

function gotocontact(){

  window.location.href = 'contact.html';
  document.getElementById('searchpage').style.height ="0%";
}
function gotoreturn(){

  window.location.href = 'return_policy.html';
  document.getElementById('searchpage').style.height ="0%";
}

function goBack() {
    window.history.back();
}
