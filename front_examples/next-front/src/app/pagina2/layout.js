import ButtonPrincipalOffCanvas from "../Components/ButtonPrincipallOffCanvas"

export default function DashboardLayout({ children }) {
    return (
        <section>
            <div className="container-lg">
                <div style={{padding: '20px 0'}}>
                    {/* Segundo offCanvas */}
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            ...
                        </div>
                    </div> 

                    {/* Boton del 2do offCanvas */}
                    <div style={{padding: '20px 0'}}>
                        <p>Este 2do layout contiene otro OffCanvas, ahora a la derecha</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Abrir OffCanvas derecho</button>
                    </div>
                    <div style={{padding: '20px 0'}}>
                        <p>Y aun se puede abrir el antiguo OffCanvas porque pertenece al layout principal</p>
                        <ButtonPrincipalOffCanvas/>
                    </div>

                    <hr />
                    
                    {children}
                </div>
            </div>
        </section>
    )
}