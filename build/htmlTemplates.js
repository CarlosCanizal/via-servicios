angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/company/company.template.html","<div class=\"view-container anim-slide-below\"><div class=\"text center\"><p>VIA Servicios® es la marca que representa IGT COMMERCIAL SERVICES, S. DE R.L. DE C.V. en México. IGT es una empresa mexicana, subsidiaria de IGT GLOBAL SOLUTIONS CORPORATION (<a target=_blank href=http://www.igt.com>www.igt.com</a>) que actúa en el área de servicios comerciales, sirviendo de intermediario entre empresas de servicios y el consumidor final.</p><p>VIA Servicios® surge para facilitar la gestión de pago de facturas que tienen los usuarios periódicamente, estableciendo puntos donde se pueden pagar varios servicios en un mismo lugar, evitándoles desplazamientos a distintos locales y ahorrándoles tiempo y dinero.</p></div><div class=center-line></div><div class=circles-container><div class=fluid-container><div class=row><div class=\"col-xs-12 col-sm-6 col-md-3\"><div class=circle><img data-ng-src=common/images/company-image-1.png></div></div><div class=\"col-xs-12 col-sm-6 col-md-3\"><div class=circle><img data-ng-src=common/images/company-image-3.png></div></div><div class=\"col-xs-12 col-sm-6 col-md-3\"><div class=circle><img data-ng-src=common/images/company-image-2.png></div></div><div class=\"col-xs-12 col-sm-6 col-md-3\"><div class=circle><img data-ng-src=common/images/company-image-4.png></div></div></div></div></div></div>");
$templateCache.put("app/contact/contact.template.html","<div class=\"view-container anim-slide-below\"><div class=text><div class=form-box><div class=fluid-container><div class=row><div class=\"col-xs-12 col-md-6\"><div class=align-center data-ng-if=contact.error><span class=error-message>Todos los campos son requeridos.</span></div><div class=align-center data-ng-if=contact.success><span class=success-message>¡Gracias! Pronto nos pondremos en contacto contigo.</span></div><form data-ng-if=!contact.success name=contact.form data-ng-submit=contact.send() novalidate><div class=\"input-row left\"><input data-ng-model=contact.info.name placeholder=*NOMBRE required></div><div class=\"input-row left\"><input data-ng-model=contact.info.email placeholder=\"*CORREO ELECTRÓNICO\" required></div><div class=\"input-row left\"><textarea data-ng-model=contact.info.message placeholder=*MENSAJE required></textarea></div><div class=\"input-row left align-right\"><button type=submit>ENVIAR</button></div><div class=privacy><nav class=separator><a ui-sref=privacy>PRIVACIDAD</a></nav><nav class=separator-left><a ui-sref=faq>PREGUNTAS FRECUENTES</a></nav></div></form></div><div class=\"col-xs-12 col-md-6\"><div class=text-box><div>Av. Constituyentes 635.</div><div>Col 16 de Septiembre.</div><div>Del Miguel Hidalgo. Ciudad de México</div><div>01 800 841 0841.</div></div><div class=\"text-box margin-top-10\"><a href=\"https://www.facebook.com/Via-Servicios-M%C3%A9xico-169380730210718/\" target=_blank><i class=\"fa fa-facebook-square\"></i></a><a href=\"https://www.instagram.com/viaserviciosmexico/\" target=_blank><i class=\"fa fa-instagram\"></i></a><a href=https://twitter.com/ViaServiciosMex target=_blank><i class=\"fa fa-twitter\"></i></a></div></div></div></div></div></div></div>");
$templateCache.put("app/confidencialidad/confidencialidad.template.html","<a class=close ui-sref=home><img data-ng-src=common/images/close.png></a><div class=lightbox><div class=lightbox-container><h2>CONFIDENCIALIDAD.</h2><div class=\"lightbox-text margin-bottom-100\"><p>En términos de lo establecido en la cláusula 10 del CONTRATO MAESTRO DE SUMINISTRO Y AGENCIA (el “Contrato”) a continuación se detallan las reglas respecto del manejo de la Información Confidencial. Para efectos de claridad la totalidad de los términos inicializados con mayúscula corresponden a las definiciones otorgadas por las Partes en el Contrato celebrados por el POS e IGT.</p><p>El POS reconoce que durante el curso del desarrollo de sus obligaciones bajo el Contrato, el POS podrá adquirir y estar en posesión de información y materiales que pueden constituir secretos industriales, o información confidencial o privilegiada de IGT (la “Información Confidencial”). La información que se vuelva disponible al público en general como consecuencia de algo distinto a una revelación en incumplimiento al Contrato no será considerada como Información Confidencial para propósitos del Contrato. Se entenderá por “Representantes” en términos de esta sección a los vendedores, accionistas, consejeros, funcionarios, empleados, agentes, consultores y representantes.</p><p>El POS deberá por sí y deberá causar que sus Representantes mantengan la Información Confidencial proveída por IGT en estricta confidencia. Salvo que IGT lo autorice por escrito, el POS, o sus Representantes se abstendrán de: (i) revelar la Información Confidencial a cualquier persona física o moral distinta a los Representantes debidamente autorizados por IGT; (ii) Usar de cualquier manera la Información Confidencial, o permitir a otros el usarla de cualquier manera, ya sea comercialmente o de otra manera, salvo por lo dispuesto en el Contrato; o (iii) permitir a personas no autorizadas el acceso a ella ya sea antes o después de la terminación del Contrato sin el consentimiento previo y por escrito de IGT. El POS reconoce y acepta que la Información Confidencial únicamente podrá ser usada por el POS y sus Representantes en términos de lo acordado en el Contrato. El POS no tendrá derecho a usar la Información Confidencial proveída por IGT para cualquier asunto que no se encuentre estrictamente relacionado con el propio desarrollo de las Actividades y de conformidad con los términos de Contrato.</p><p>El POS acuerda en este acto que: (i) sus Representantes deberán ser informados de la naturaleza confidencial de la Información Confidencial proveída por IGT, y deberán ser instruidos a tratar la Información Confidencial como confidencial; y (ii) el POS será responsable e indemnizará a IGT en caso de que incumpla dichas instrucciones o sus obligaciones aquí referidas.</p><p>Si el POS, o cualquiera de sus Representantes reciben una solicitud o requerimiento por medio de una orden de un tribunal o autoridad competente en cualquier índole de procedimiento que revelen cualquier Información Confidencial, ya sea de manera total o parcial, el POS deberá notificar de manera expedita y deberá hacer que sus Representantes notifiquen a IGT sobre dicha solicitud o requerimiento a efecto de que IGT pueda buscar, cuando sea aplicable, una medida suspensional, o una orden de protección, u obtener u otorgar una renuncia de cumplimiento a las disposiciones del Contrato. En ausencia de una orden de suspensión, orden de protección, o recepción de la renuncia enunciada anteriormente, en caso de que el POS o sus Representantes se encuentren obligados por ley o en virtud del proceso legal a revelar la Información Confidencial, dicha parte podrá revelar únicamente la Información Confidencial que haya sido requerida y en la medida en que haya llevado a cabo los esfuerzos razonable para obtener una orden u otra confirmación confiable del trato confidencial que será otorgado a la Información Confidencial, en cuyo caso no habrá responsabilidad por la revelación de la Información Confidencial en términos del presente párrafo.</p><p>El POS reconoce que IGT es propietaria de los derechos, título y cualquier participación en y con relación a la totalidad de la propiedad intelectual contenida dentro de la Información Confidencial (incluyendo aquella relacionada a los Productos), tales como patentes, marcas, derechos de autor, secretos industriales relacionados a las ideas, metodologías, protocolos, procedimientos o técnicas. El POS además reconoce que la Información Confidencial es de valor inherente para IGT y/o provee a IGT una ventaja económica y de negocios significativa a IGT sobre sus competidores.</p><p>El POS reconoce y acuerda que la Información Confidencial deberá ser considerada como secreto industrial en términos de lo señalado por el Artículo 82 de la Ley de Propiedad Industrial (la “LPI”), y que en adición a gozar del trato confidencial y las protecciones permitidas a toda la Información Confidencial bajo el Contrato, también gozará de la protección que la LPI otorga a los secretos industriales. Consecuentemente, si el POS o sus representantes infringen o incumplen el Contrato y/o violan cualquiera de las disposiciones de la LPI con relación a la Información Confidencial y secretos industriales, el POS será sujeto a las disposiciones de los capítulos II y III título VII de la LPI, en adición a cualquier otro recurso o acción al que tenga derecho IGT en el Contrato. El POS reconoce y acuerda que deberá lograr que sus Representantes reconozcan y acuerden que entienden el ámbito y seriedad de las disposiciones aplicables de la LPI. El POS será solidariamente responsable en caso de que los Representantes incumplan las obligaciones descritas en esta cláusula.</p><p>En caso, de que el POS, ya sea por cuenta propia o a través de sus Representantes incumpla esta cláusula, IGT estará facultada a los daños causados por la falta de cumplimiento del POS de sus obligaciones de conformidad con lo establecido en el artículo 2028 del Código Civil Federal, así como al pago de los gastos razonables que se generen por la representación legal en dichos procedimientos, incluyendo gastos y costas que se generen.</p><p>El POS acuerda por su cuenta y de sus Representantes que tanto el POS como sus Representantes no podrán directa o indirectamente, durante la vigencia del Contrato y [cinco (5) años] contados a partir de la terminación del mismo, por cuenta propia o en conjunto con otra persona: (i) usar cualquier parte de la Información Confidencial proveída por IGT bajo el Contrato, en otra manera que no sea en los términos acordados en el mismo Contrato; o (ii) usar dicha la Información Confidencial o secretos industriales que se generen o sean proveídos durante la vigencia del contrato por IGT en otra manera distinta a la provista en el Contrato.</p></div></div></div>");
$templateCache.put("app/home/home.template.html","<div class=\"view-container anim-slide-below\"><div class=general-container><div class=carousel-container id=home-carousel><div class=\"carousel-riel clearfix\"><nav class=\"item banner1\"><div class=\"text-image left banner1\"><div class=main-title><div>CAMBIA TU FUTURO</div></div><div class=subtitle><div>Forma parte de VIA SERVICIOS sin costo de afiliación</div><div>ni invertir en equipos adicionales. <a class=underline ui-sref=distributor>REGÍSTRATE AHORA</a></div></div><div class=mobile-image><img src=common/images/banner1-mobile.png></div></div></nav><nav class=\"item banner2\"><div class=\"text-image right banner2\"><div class=main-title><div class=\"main-title align-right\"><div>PAGA</div><div>LO QUE QUIERAS</div></div></div><div class=\"subtitle align-right\"><div>Puedes pagar más de 400 servicios y tener</div><div>tiempo para hacer lo que más te gusta.</div></div><div class=mobile-image><img src=common/images/banner2-mobile.png></div></div></nav><nav class=\"item banner3\"><div class=\"text-image left banner3\"><div class=main-title><div>PAGA RÁPIDO</div><div>Y MUY SENCILLO</div></div><div class=subtitle><div>Con VIA SERVICIOS tu pago se registra al instante,</div><div>sin retrasos ni complicaciones.</div></div><div class=mobile-image><img src=common/images/banner3-mobile.png></div></div></nav><nav class=\"item banner4\"><div class=\"text-image right banner4\"><div class=\"main-title align-right\"><div class=align-right>APROVECHA</div><div>TU TIEMPO</div></div><div class=\"subtitle align-right\"><div>Paga todos tus servicios en un mismo lugar.</div><div>Olvídate de las filas en menos tiempo.</div></div><div class=mobile-image><img src=common/images/banner4-mobile.png></div></div></nav></div><div class=navs-container><div class=\"navs clearfix\"><nav data-ng-repeat=\"n in home.getNumber(home.items) track by $index\" data-ng-class=\"{\'active\':home.selected == $index}\" data-ng-click=home.selectIt($index)><span></span></nav></div></div></div></div></div>");
$templateCache.put("app/faq/faq.template.html","<div class=\"view-container anim-slide-below\"><div class=general-info><a class=close-button ui-sref=contact><img data-ng-src=common/images/close.png></a><h3 class=general-title>Preguntas Frecuentes:</h3><div class=question-title>1. ¿Qué es VIA Servicios®?</div><p class=answer>VIA Servicios® es la marca que representa IGT COMMERCIAL SERVICES, S. DE R.L. DE C.V. en México. IGT es una empresa mexicana, subsidiaria de IGT GLOBAL SOLUTIONS CORPORATION (www.igt.com) que actúa en el área de servicios comerciales, sirviendo de intermediario entre empresas de servicios y el consumidor final. VIA Servicios® establece agencias donde se pueden pagar varios servicios en el mismo lugar.</p><div class=question-title>2. ¿Cuáles son las ventajas de usar VIA Servicios®?</div><p class=answer>Al usar VIA Servcios® obtiene ventajas como posibilidad de pagar todas las facturas en un solo lugar, garantía de seguridad y agilidad en las transacciones, registro de pagos en tiempo real<span class=supindice>1</span>,realización de pagos sin necesidad de cuenta bancaria, facilidad de uso y disponibilidad de agencias de fácil acceso distribuidas en todo el país.</p><div class=question-title>3. ¿Cuáles servicios se puede pagar a través de VIA Servicios®?</div><p class=answer>En las agencias VIA Servicios® los usuarios pueden pagar sus facturas energía eléctrica, gobiernos, peajes, comunicación fija y móvil, agua, pago de pólizas de seguro, pago de préstamos y adquirir recargas de tiempo aire de la principales compañías telefónicas del país.</p><div class=question-title>4. ¿Cómo se usa VIA Servicios®?</div><p class=answer>Usar VIA Servicios® es fácil. El usuario solo debe dirigirse a una de las agencias identificadas con la marca VIA Servicios® y presentar la factura del servicio a pagar o indicar su número de contrato. Tras validar la cuenta y monto a pagar, el usuario realiza el pago del valor correspondiente y el agente completa la transacción vía sistema, imprimiendo un comprobante de pago que será entregado al usuario. Dicho comprobante debe ser conservado como prueba de que el pago fue realizado.</p><div class=question-title>5. ¿Cuánto tiempo demora el registro de los pagos?</div><p class=answer>Cada equipo que procesa pagos tiene comunicación directa con las empresas de servicio, lo que permite que cada pago quede legalmente identificado y registrado junto a la empresa proveedora del servicio. Los pagos se registran en tiempo real<span class=supindice>1</span>, al momento de ser realizados.</p><div class=question-title>6. ¿Dónde encuentro un punto VIA?</div><p class=answer>VIA Servicios® cuenta con más de 1,000 agencias a nivel nacional. Puede encontrar un listado detallado de los locales afiliados en nuestra página web www.viaservicios.com.mx</p><div class=question-title>7. ¿Cuál es el horario de funcionamiento de las agencias VIA Servicios®?</div><p class=answer>Las agencias VIA Servicios® operan según el horario de atención al cliente del local donde estén ubicados.</p><div class=question-title>8. ¿Cómo debo hacer para colocar una terminal de VIA Servicios® en mi negocio?</div><p class=answer>Para formar parte de la red VIA Servicios®, el representante del negocio debe completar el formulario disponible en la página web www.viaservicios.com.mx/ y será contactado por un ejecutivo de servicio. Seguido, el ejecutivo le visitará para completar las informaciones comerciales y financieras pertinentes y dar curso a la solicitud.</p><div class=question-title>9. ¿Cuál es el proceso en caso de reclamaciones?</div><p class=answer>Caso algún inconveniente con el servicio o el reconocimiento del pago, el usuario debe contactar a los teléfonos que aparecen al pie de su ticket o dirigirse a su compaña proveedora con el comprobante de pago recibido en el punto VIA Servicios®. En dicho comprobante consta un número de confirmación que es el identificador que el proveedor utiliza para rastrear y reconocer dicho pago.</p><div class=subindice>1: Solo aquellos que tienen conexión en línea</div></div></div>");
$templateCache.put("app/distributor/distributor.template.html","<div class=\"view-container anim-slide-below\"><div class=\"text left\"><p>Para pertenecer a la red de agencias VIA Servicios® es fácil y trae consigo múltiples beneficios para el establecimiento.</p><ul class=list><li>Operación sin costo alguno por concepto de equipo, papel, impresión ni internet.</li><li>Disponibilidad de un portafolio de servicios más amplio para sus clientes.</li><li>Línea de crédito pre-aprobada, solo con un pago anual del Fondo de Riesgo.</li><li>Mayor flujo de visitas a su establecimiento.</li><li>Potencial de mayores ingresos.</li><li>Formar parte de la exclusiva red que ofrece este servicio.</li><li>Respaldo de una empresa con más de 30 años de experiencia en México y el mundo</li><li>Disponibilidad de soporte, atención y mantenimiento personalizado de ejecutivos de VIA Servicios®.</li><li>Disponibilidad de asesoría técnica y comercial vía call center.</li></ul><p>Si desea formar parte de la red VIA Servicios®, complete el siguiente formulario y un ejecutivo de servicio le contactará.</p></div><div class=form-box><div class=fluid-container><div class=align-center data-ng-if=distributor.error><span class=error-message>Todos los campos son requeridos.</span></div><div class=align-center data-ng-if=distributor.success><span class=success-message>¡Gracias! Pronto nos pondremos en contacto contigo.</span></div><form data-ng-if=!distributor.success name=distributor.form data-ng-submit=distributor.send() novalidate><div class=row><div class=\"col-xs-12 col-md-6\"><div class=\"input-row left\"><input placeholder=\"*NOMBRE DEL ESTABLECIMIENTO\" data-ng-model=distributor.info.name required></div><div class=\"input-row left\"><input placeholder=*DIRECCIÓN data-ng-model=distributor.info.address required></div><div class=\"input-row left\"><input type=email placeholder=\"*CORREO ELECTRÓNICO\" data-ng-model=distributor.info.email requied=requied></div></div><div class=\"col-xs-12 col-md-6\"><div class=\"input-row right\"><input placeholder=\"*PERSONA DE CONTACTO\" data-ng-model=distributor.info.contact required></div><div class=\"input-row right\"><input placeholder=*TELÉFONO data-ng-model=distributor.info.phone required></div><div class=\"input-row align-right\"><button type=submit>ENVIAR</button></div></div></div></form></div></div></div>");
$templateCache.put("app/privacy/privacy.template.html","<div class=\"view-container anim-slide-below\"><div class=general-info><a class=close-button ui-sref=contact><img data-ng-src=common/images/close.png></a><h3 class=general-title>AVISO DE PRIVACIDAD Y MANEJO DE INFORMACIÓN PERSONAL.</h3><p class=answer>En términos de lo establecido en la cláusula 12 del CONTRATO MAESTRO DE SUMINISTRO Y AGENCIA (el “Contrato”), IGT en nombre de sus afiliados y/o subsidiarios, con domicilio en Avenida Constituyentes #635, Colonia 16 de Septiembre, Delegación Miguel Hidalgo, C.P. 11810, Ciudad de México, proporciona la Política de Privacidad aquí descrita. Para efectos de claridad, la totalidad de los términos inicializados con mayúscula corresponden a las definiciones otorgadas por las Partes en el Contrato celebrados por el POS e IGT.</p><p class=answer>a) Información Personal/Datos recabados. – IGT recaba información que el POS proporciona voluntariamente a través de la celebración del Contrato, el cual incluye de manera enunciativa más no limitativa la siguiente: (i) Nombre completo, fecha de nacimiento, correo electrónico, número de teléfono, número de celular; (ii) Empleador, cargo y responsabilidades, domicilio del empleador, página web, número de empleados del POS; (iii) País y ciudad de residencia, código postal; (iv) Cuenta de Twitter.</p><p class=answer>IGT no solicita información sensible como la relacionada con etnicidad, religión, salud física u orientación sexual. Si fuese necesaria, IGT obtendrá la autorización expresa y por escrito para tal fin.</p><p class=answer>b) Uso de Información Personal. – IGT usa y usará la información proporcionada por el POS para: (i) Contactar al POS; (ii) Enviar información relevante respecto de los Productos; (iii) Incluir al POS, si es requerido, en programas y cursos de capacitación respecto del uso de la Terminal y como incrementar la comercialización de los Productos; (iv) Darle seguimiento a sus comentarios, sugerencias y opiniones; (v) llevar a cabo la investigación referenciada en la Sección 11 anterior; (vi) Desarrollar estrategias de marketing; (vii) llevar a cabo gestiones de cobro cuando sean requeridas; (viii) abrir un archivo específico para el POS; (ix) cumplir con la legislación relevante y aplicable; y (x) para el proceso de facturación cuando sea requerido.</p><p class=answer>IGT podremos utilizar la información personal del POS para otros propósitos, en la medida que dichos propósitos sean consistentes con los descritos anteriormente y relacionados con el correcto desempeño de las Actividades.</p><p class=answer>IGT no vende, renta, cede, transfiere o de algún modo proporciona información personal identificable a terceros sin el previo consentimiento del POS, excepto cuando sea necesario llevar a cabo indicaciones del POS y cuando sea permitido por las legislaciones de ciertos países.</p><p class=answer>c) Seguridad. – La información personal proporcionada por el POS estará protegida conforme a los estándares de la industria y la tecnología. No obstante a lo anterior, como el internet y los servidores conectados al internet no están en un entorno 100% seguro, IGT no puede asegurar o garantizar la seguridad de la información proporcionada por el POS. No hay garantía alguna que la información no será accedida, copiada, revelada, alterada o destruida por una intrusión no autorizada a cualquiera de nuestras medidas de protección físicas técnicas o administrativas.</p><p class=answer>d) Opciones respecto de la Información del POS. El POS, como titular de su información personal, podrá: (i) Salvo por la información referida en la Sección 11 anterior, revocar en cualquier momento la autorización otorgada para recabar su información, la cual era necesaria para cumplir con el trato de la información personal del POS; (ii) Solicitar la limitación del uso o revelación de dicha información.</p><p class=answer>El POS podrá ejercer dichos derechos mandando un correo electrónico a la siguiente dirección: info@viaservicios.com.mx, o por medio de una carta dirigida a IGT a la siguiente dirección: Avenida Constituyentes #635, Colonia 16 de Septiembre, Delegación Miguel Hidalgo, C.P. 11810, Ciudad de México</p><p class=answer>e) Disposiciones Generales.- IGT se reserva el derecho a hacer cambios a ésta Política de Privacidad, si dichas modificaciones se llevaran a cabo, estas serán publicadas en el link a continuación: www.viaservicios.com.mx, siendo que el POS reconoce y acepta que dicha publicación será considerada como una notificación válida de las modificaciones.</p><p class=answer>Al proporcionar toda la información anterior, el POS reconoce los términos y condiciones aquí expuestos.</p><h3 class=general-title>CONFIDENCIALIDAD.</h3><p class=answer>En términos de lo establecido en la cláusula 10 del CONTRATO MAESTRO DE SUMINISTRO Y AGENCIA (el “Contrato”) a continuación se detallan las reglas respecto del manejo de la Información Confidencial. Para efectos de claridad la totalidad de los términos inicializados con mayúscula corresponden a las definiciones otorgadas por las Partes en el Contrato celebrados por el POS e IGT.</p><p class=answer>El POS reconoce que durante el curso del desarrollo de sus obligaciones bajo el Contrato, el POS podrá adquirir y estar en posesión de información y materiales que pueden constituir secretos industriales, o información confidencial o privilegiada de IGT (la “Información Confidencial”). La información que se vuelva disponible al público en general como consecuencia de algo distinto a una revelación en incumplimiento al Contrato no será considerada como Información Confidencial para propósitos del Contrato. Se entenderá por “Representantes” en términos de esta sección a los vendedores, accionistas, consejeros, funcionarios, empleados, agentes, consultores y representantes.</p><p class=answer>El POS deberá por sí y deberá causar que sus Representantes mantengan la Información Confidencial proveída por IGT en estricta confidencia. Salvo que IGT lo autorice por escrito, el POS, o sus Representantes se abstendrán de: (i) revelar la Información Confidencial a cualquier persona física o moral distinta a los Representantes debidamente autorizados por IGT; (ii) Usar de cualquier manera la Información Confidencial, o permitir a otros el usarla de cualquier manera, ya sea comercialmente o de otra manera, salvo por lo dispuesto en el Contrato; o (iii) permitir a personas no autorizadas el acceso a ella ya sea antes o después de la terminación del Contrato sin el consentimiento previo y por escrito de IGT. El POS reconoce y acepta que la Información Confidencial únicamente podrá ser usada por el POS y sus Representantes en términos de lo acordado en el Contrato. El POS no tendrá derecho a usar la Información Confidencial proveída por IGT para cualquier asunto que no se encuentre estrictamente relacionado con el propio desarrollo de las Actividades y de conformidad con los términos de Contrato.</p><p class=answer>El POS acuerda en este acto que: (i) sus Representantes deberán ser informados de la naturaleza confidencial de la Información Confidencial proveída por IGT, y deberán ser instruidos a tratar la Información Confidencial como confidencial; y (ii) el POS será responsable e indemnizará a IGT en caso de que incumpla dichas instrucciones o sus obligaciones aquí referidas.</p><p class=answer>Si el POS, o cualquiera de sus Representantes reciben una solicitud o requerimiento por medio de una orden de un tribunal o autoridad competente en cualquier índole de procedimiento que revelen cualquier Información Confidencial, ya sea de manera total o parcial, el POS deberá notificar de manera expedita y deberá hacer que sus Representantes notifiquen a IGT sobre dicha solicitud o requerimiento a efecto de que IGT pueda buscar, cuando sea aplicable, una medida suspensional, o una orden de protección, u obtener u otorgar una renuncia de cumplimiento a las disposiciones del Contrato. En ausencia de una orden de suspensión, orden de protección, o recepción de la renuncia enunciada anteriormente, en caso de que el POS o sus Representantes se encuentren obligados por ley o en virtud del proceso legal a revelar la Información Confidencial, dicha parte podrá revelar únicamente la Información Confidencial que haya sido requerida y en la medida en que haya llevado a cabo los esfuerzos razonable para obtener una orden u otra confirmación confiable del trato confidencial que será otorgado a la Información Confidencial, en cuyo caso no habrá responsabilidad por la revelación de la Información Confidencial en términos del presente párrafo.</p><p class=answer>El POS reconoce que IGT es propietaria de los derechos, título y cualquier participación en y con relación a la totalidad de la propiedad intelectual contenida dentro de la Información Confidencial (incluyendo aquella relacionada a los Productos), tales como patentes, marcas, derechos de autor, secretos industriales relacionados a las ideas, metodologías, protocolos, procedimientos o técnicas. El POS además reconoce que la Información Confidencial es de valor inherente para IGT y/o provee a IGT una ventaja económica y de negocios significativa a IGT sobre sus competidores.</p><p class=answer>El POS reconoce y acuerda que la Información Confidencial deberá ser considerada como secreto industrial en términos de lo señalado por el Artículo 82 de la Ley de Propiedad Industrial (la “LPI”), y que en adición a gozar del trato confidencial y las protecciones permitidas a toda la Información Confidencial bajo el Contrato, también gozará de la protección que la LPI otorga a los secretos industriales. Consecuentemente, si el POS o sus representantes infringen o incumplen el Contrato y/o violan cualquiera de las disposiciones de la LPI con relación a la Información Confidencial y secretos industriales, el POS será sujeto a las disposiciones de los capítulos II y III título VII de la LPI, en adición a cualquier otro recurso o acción al que tenga derecho IGT en el Contrato. El POS reconoce y acuerda que deberá lograr que sus Representantes reconozcan y acuerden que entienden el ámbito y seriedad de las disposiciones aplicables de la LPI. El POS será solidariamente responsable en caso de que los Representantes incumplan las obligaciones descritas en esta cláusula.</p><p class=answer>En caso, de que el POS, ya sea por cuenta propia o a través de sus Representantes incumpla esta cláusula, IGT estará facultada a los daños causados por la falta de cumplimiento del POS de sus obligaciones de conformidad con lo establecido en el artículo 2028 del Código Civil Federal, así como al pago de los gastos razonables que se generen por la representación legal en dichos procedimientos, incluyendo gastos y costas que se generen.</p><p class=answer>El POS acuerda por su cuenta y de sus Representantes que tanto el POS como sus Representantes no podrán directa o indirectamente, durante la vigencia del Contrato y [cinco (5) años] contados a partir de la terminación del mismo, por cuenta propia o en conjunto con otra persona: (i) usar cualquier parte de la Información Confidencial proveída por IGT bajo el Contrato, en otra manera que no sea en los términos acordados en el mismo Contrato; o (ii) usar dicha la Información Confidencial o secretos industriales que se generen o sean proveídos durante la vigencia del contrato por IGT en otra manera distinta a la provista en el Contrato.</p></div></div>");
$templateCache.put("app/services/services.template.html","<div class=\"view-container anim-slide-below\"><div class=\"text left\"><p>En los puntos de pago VIA Servicios® los usuarios pueden pagar sus facturas de servicios básicos como electricidad, agua, además de facturas de teléfono fijo, teléfono celular, peajes, gobiernos, internet, cable y realizar recargas.</p><p>Las compañías aliadas a la red VIA Servicios® son:</p></div><div class=services><div class=carousel-container id=services-carousel><div class=\"carousel-riel clearfix\"><nav class=\"item align-center\"><div class=\"service-icon services1\"><div class=horizontal-separator></div><img data-ng-src=common/images/recargas.png><span>RECARGAS</span></div><div class=padding-side><div class=icons-container><div class=\"vertical-separator services1\"></div><img class=\"service-img big\" data-ng-src=common/images/recargas1.png><img class=\"service-img small\" data-ng-src=common/images/recargas2.png><img class=\"service-img small\" data-ng-src=common/images/recargas3.png></div><div class=icons-container><img class=\"service-img small\" data-ng-src=common/images/recargas4.png><img class=\"service-img small\" data-ng-src=common/images/recargas5.png><img class=\"service-img small\" data-ng-src=common/images/recargas6.png></div></div></nav><nav class=\"item align-center\"><div class=service-icon><div class=horizontal-separator></div><img data-ng-src=common/images/luz.png><span>LUZ</span></div><div class=padding-side><div class=icons-container><div class=\"vertical-separator services2\"></div><img class=\"service-img small\" data-ng-src=common/images/luz1.png></div></div></nav><nav class=\"item align-center\"><div class=\"service-icon services3\"><div class=horizontal-separator></div><img data-ng-src=common/images/comunicacion.png><span>COMUNICACIÓN</span></div><div class=padding-side><div class=icons-container><div class=vertical-separator></div><img class=\"service-img small\" data-ng-src=common/images/comunicacion3.png><img class=\"service-img big\" data-ng-src=common/images/comunicacion1.png><img class=\"service-img small\" data-ng-src=common/images/comunicacion2.png></div><div class=icons-container><img class=service-img data-ng-src=common/images/comunicacion4.png><img class=\"service-img small\" data-ng-src=common/images/comunicacion5.png><img class=service-img data-ng-src=common/images/comunicacion6.png></div></div></nav><nav class=\"item align-center\"><div class=\"service-icon services4\"><div class=horizontal-separator></div><img data-ng-src=common/images/cable.png><span>CABLE</span></div><div class=padding-side><div class=icons-container><div class=\"vertical-separator services4\"></div><img class=\"service-img x-small\" data-ng-src=common/images/cable1.png><img class=\"service-img x-small\" data-ng-src=common/images/cable2.png><img class=\"service-img x-small\" data-ng-src=common/images/cable3.png><img class=\"service-img x-small\" data-ng-src=common/images/cable4.png><img class=service-img data-ng-src=common/images/cable5.png></div><div class=icons-container><img class=service-img data-ng-src=common/images/cable6.png><img class=service-img data-ng-src=common/images/cable7.png><img class=service-img data-ng-src=common/images/cable8.png></div></div></nav><nav class=\"item align-center\"><div class=\"service-icon services5\"><div class=horizontal-separator></div><img data-ng-src=common/images/gobierno.png><span>GOBIERNO</span></div><div class=padding-side><div class=icons-container><div class=\"vertical-separator services5\"></div><img class=service-img data-ng-src=common/images/gobierno1.png><img class=\"service-img x-small\" data-ng-src=common/images/gobierno2.png><img class=service-img data-ng-src=common/images/gobierno3.png></div><div class=icons-container><img class=\"service-img big\" data-ng-src=common/images/gobierno4.png></div></div></nav><nav class=\"item align-center\"><div class=\"service-icon services6\"><div class=horizontal-separator></div><img data-ng-src=common/images/peaje.png><span>PEAJE</span></div><div class=padding-side><div class=icons-container><div class=\"vertical-separator services6\"></div><img class=\"service-img xx-small\" data-ng-src=common/images/peaje4.png><img class=\"service-img small\" data-ng-src=common/images/peaje1.png><img class=service-img data-ng-src=common/images/peaje2.png><img class=\"service-img small\" data-ng-src=common/images/peaje3.png></div></div></nav><nav class=\"item align-center\"><div class=\"service-icon services7\"><div class=horizontal-separator></div><img data-ng-src=common/images/otros.png><span>OTROS</span></div><div class=padding-side><div class=icons-container><div class=\"vertical-separator services7\"></div><img class=service-img data-ng-src=common/images/otros5.png><img class=service-img data-ng-src=common/images/otros2.png><img class=service-img data-ng-src=common/images/otros1.png></div><div class=icons-container><img class=service-img data-ng-src=common/images/otros3.png><img class=service-img data-ng-src=common/images/otros6.png><img class=service-img data-ng-src=common/images/otros4.png></div></div></nav></div><div class=navs-container><div class=\"navs clearfix\"><nav data-ng-repeat=\"n in services.getNumber(services.items) track by $index\" data-ng-class=\"{\'active\':services.selected == $index}\" data-ng-click=services.selectIt($index)><span></span></nav></div></div></div></div></div>");}]);