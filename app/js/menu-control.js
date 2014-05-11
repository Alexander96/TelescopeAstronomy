/// <reference path="lib/jquery-2.1.0.js" />
    //.list:hover { max-height: 20em; }
var typestelescopes = false,
    formulas = false,
    laws = false,
    knowfor = false,
    quotes = false;
$('#typestelescopes').click(function () {
    if (!typestelescopes) {
        $('#typestelescopesul').css('maxHeight', '30em');
        typestelescopes = true;
    }
    else {
        $('#typestelescopesul').css('maxHeight', '0em');
        typestelescopes = false;
    }
});
$('#formulas').click(function () {
    if (!formulas) {
        $('#formulasul').css('display', 'block');
        $('#formulasul').css('maxHeight', '20em');
        formulas = true;
    }
    else {
        $('#formulasul').css('maxHeight', '0em');
        formulas = false;
    }
});
$('#laws').click(function () {
    if (!laws) {
        $('#lawsul').css('maxHeight', '20em');
        laws = true;
    }
    else {
        $('#lawsul').css('maxHeight', ' 0em');
        laws = false;
    }
});
$('#knowfor').click(function () {
    if (!knowfor) {
        $('#knowforul').css('maxHeight', '30em');
        knowfor = true;
    }
    else {
        $('#knowforul').css('maxHeight', '0em');
        knowfor = false;
    }
});
$('#quotes').click(function () {
    if (!quotes) {
        $('#quotesul').css('maxHeight', '20em');
        quotes = true;
    }
    else {
        $('#quotesul').css('maxHeight', ' 0em');
        quotes = false;
    }
});