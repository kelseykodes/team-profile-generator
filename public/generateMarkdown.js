function generateMarkdown(data) {
    return `<!DOCTYPE html>
    <html>

    <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>

<body>

    <header>
        <h1> Your Team!</h1>
    </header>

    <main>
        <div class="card" style="width: 18rem;">
            <img src="./bgimg.jpg" class="card-img-top" alt="manager">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted"><strong>Manager:${data.name} </strong></h6>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Office Number: ${data.officeNumber}</p>
                <a href="mailto: ${data.email}" class="card-link">Email:${data.email}</a>
            </div>
        </div>`
    };
    
    function engineerMarkdown (data) {
    return `
    <div class="card" style="width: 18rem;">
            <img src="./bgimg.jpg" class="card-img-top" alt="engineer">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted"><strong>Engineer:${data.name}</strong></h6>
                <p class="card-text">ID:${data.id}</p>
                <a href="https://github.com/${data.github}" class="card-link">My Github${data.github}</a>
                <a href="mailto:${data.eemail}" class="card-link">Email${data.email}</a>
            </div>
        </div>`
    }
    
    function internMarkdown (data) {
        return  `<div class="card" style="width: 18rem;">
        <img src="./bgimg.jpg" class="card-img-top" alt="intern">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted"><strong>Intern:${data.name} </strong></h6>
            <p class="card-text">ID: ${data.id}</p>
            <p class="card-text">School:${data.school}</p>
            <a href="mailto:${data.email}" class="card-link">Email${data.email}</a>
        </div>
    </div>`
    }

    function stopMarkdown () {
        return `</main>
    </body>
    </html>`
    };
    
    module.exports = {
        generateMarkdown,
        engineerMarkdown,
        internMarkdown,
        stopMarkdown
     };