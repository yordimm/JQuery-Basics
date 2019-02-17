
const pageUrl = 'https://ssq.ca/fr/carriere';

function getJobs() {
    let jobs = [];
    $("li").each(function (i) {
        const element = $(this);
        const title = element.find("a").text();
        const url = element.find("a").attr("href");
        const pContent = ($(this).find("p").text()).split("-");
        const type = pContent[1];
        const location = pContent[0];
        if (title && type) {
            let job = { title, location, url, type };
            jobs = [...jobs, job];
        }
    });
    return jobs;
}

async function buildDom() {
    await $.get(pageUrl, function (data, status) {
        if (status) {
            $("html").html(data)
        }
    });
}

async function getInfo() {
    await buildDom();
    const jobs = getJobs();
    console.log(jobs)
}
