export const poems = {
    poem1: `به لاله نرگس مخمور گفت وقت سحر  که هر که در صف باغ است صاحب هنریست`,
    poem2: `تا بکی جان کندن اندر آفتاب ای رنجبر  ریختن از بهر نان از چهر آب ای رنجبر`,
    poem3: `روزی گذشت پادشهی از گذرگهی  فریاد شوق بر سر هر کوی و بام خاست`,
    poem4: `تاجری در کشور هندوستان  طوطئی زیبا خرید از دوستان`,
    poem5: `نهان شد از گل زردی گلی سپید که ما  سپید جامه و از هر گنه مبرائیم`,
    poem6: `مرغی بباغ رفت و یکی میوه کند و خورد  ناگه ز دست چرخ بپایش رسید سنگ`,
    poem7: `گربهٔ پیری، ز شکار اوفتاد  زار بنالید و نزار اوفتاد`,
    poem8: `دور جهان، خونی خونخوارهاست  محکمهٔ نیک و بد کارهاست`,
    poem9: `نوگلی، روزی ز شورستان دمید  خار، آن گل دید و رو در هم کشید`,
    poem10: `دید موری طاسک لغزنده‌ای  از سر تحقیر، زد لبخنده‌ای`,
    poem11: `شنیده‌اید میان دو قطره خون چه گذشت  گه مناظره، یک روز بر سر گذری`,
    poem12: `با مور گفت مار، سحرگه بمرغزار  کاز ضعف و بیخودی، تو چنین خردی و نزار`,
    poem13: `هر که با پاکدلان، صبح و مسائی دارد  دلش از پرتو اسرار، صفائی دارد`,
    poem14: `ای دل، اول قدم نیکدلان  با بد و نیک جهان، ساختن است`,
}


export function poetry(verse){
    let result = null;

    const hemistiches = verse.split(`  `);
    const lastChar1 = hemistiches[0].charAt(hemistiches[0].length - 1);
    const lastChar2 = hemistiches[1].charAt(hemistiches[1].length - 1);

    for(let i in poems){
        const newHemistiches = poems[i].split(`  `);
        const firstChar1 = newHemistiches[0].charAt(0);

        if(lastChar2 == firstChar1){
            result = poems[i];
            break;
        }
        else if(lastChar1 == firstChar1){
            result = poems[i];
            break;
        }
        else{
            result = null;
        }
    }

    return result;

}