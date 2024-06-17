workers = 2

bind = '0.0.0.0:8000'

accesslog = '-'

errorlog = '-'

# %(t)s: Hora en que se recibió la solicitud, formateada entre corchetes (e.g., [10/Oct/2000:13:55:36 -0700]).
# %(h)s: Dirección IP del cliente que hizo la solicitud.
# %(l)s: Nombre de usuario remoto (normalmente es '-').
# %(r)s: Línea de solicitud en bruto (método HTTP y ruta, e.g., GET / HTTP/1.1).
# %(s)s: Código de estado de la respuesta HTTP.
# %(b)s: Tamaño de la respuesta en bytes (excluyendo los encabezados).
# %(a)s: Agente de usuario (navegador o cliente que hizo la solicitud).

# %(u)s: Usuario autenticado (normalmente es '-').
# %(f)s: Referente HTTP, es decir, la página anterior desde la que se hizo la solicitud.

access_log_format = '%(t)s %(h)s %(l)s "%(r)s" %(s)s %(b)s'
