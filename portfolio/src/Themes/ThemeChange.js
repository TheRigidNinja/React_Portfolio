import $ from "jquery";

const Themes = {
    Menu: { '.navMenu': "Mmenu", '.navLogo': "Mlight", '.tracNum': "Mlight"}
}
export function ThemeChange(pageAction) {

    if (pageAction != undefined) {
        if (pageAction.includes('Rm')) {
            pageAction = pageAction.substring(0, pageAction.length-2);

            $.each(Themes[pageAction], function (key, style) {
                $(key).removeClass(style).addClass(`${style}Rm`);
            }); 

        }else{

            $.each(Themes[pageAction], function(key, style) {
                $(key).removeClass(`${style}Rm`).addClass(style);
            }); 
        }
    }
}