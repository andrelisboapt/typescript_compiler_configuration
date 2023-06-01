let logged;

function sendAnalytics(data: string){ //if we don't specify the type, it will assume as ANY because noImplicitAny is activated
    console.log(data);
    logged = true
}

sendAnalytics('The data');