
const pageUrl = 'https://ssq.ca/fr/carriere';

function getJobs() {
    let jobs = [];
    console.log('entre x2')
    $(document).ready(function () {
        $("li").each(function (i) {
            if (i <= 28) {
                const element = $(this);
                const title = element.find("a").text();
                const url = element.find("a").attr("href");
                const pContent = ($(this).find("p").text()).split("-");
                const type = pContent[1];
                const location = pContent[0];
                let job = { title, location, url, type };
                jobs = [...jobs, job];
            }
        });
        console.log(jobs)
        return jobs;
    });

}


function buildDom() {
    $("button").click(function () {
        $.get(pageUrl, function (data, status) {
            $("html").html(function () {
                return data + "<button type='button' onclick='intermediate()'>Get Jobs Information</button>" + "<p class='respuesta'>hola</p>";
            })
        });
    });
}

 function intermediate() {
    console.log('entre')
    const result = getJobs();
    console.log(result)
    $("button").click(function () {
        $(".respuesta").html(function () {
            return result;
        })
    });
}