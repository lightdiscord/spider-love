use actix_web::{ get, App, HttpResponse, HttpServer, Responder };

#[get("/")]
fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello, world!")
}

fn main() {
    let create_app = || App::new()
        .service(index);

    HttpServer::new(create_app)
        .bind("::1:8080")
        .unwrap()
        .run()
        .unwrap();
}
