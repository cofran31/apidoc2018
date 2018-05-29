'use strict';

exports.deleteAdwordsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteClient_adwordsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteClient_purchasesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteClient_salesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteClient_shopsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deletePaymentsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteProductsCategoriesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteProductsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteShopping_cartsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteShopsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteUsersId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAdwords = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "url_web" : "aeiou",
  "tipo_anuncio" : "aeiou",
  "id_cliente_anuncio" : 123456789,
  "nombre_anuncio" : "aeiou",
  "id" : 123456789,
  "vistas" : 123456789
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAdwordsAnuncio_aleatorio = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "iframe" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAdwordsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "url_web" : "aeiou",
  "tipo_anuncio" : "aeiou",
  "id_cliente_anuncio" : 123456789,
  "nombre_anuncio" : "aeiou",
  "id" : 123456789,
  "vistas" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getClient_adwordsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getClient_purchasesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getClient_salesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getClient_shopsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPayments = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "tipo_tarjeta" : "aeiou",
  "id_users" : "aeiou",
  "nombre_entidad_financiera" : "aeiou",
  "id" : 123456789
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPaymentsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo_tarjeta" : "aeiou",
  "id_users" : "aeiou",
  "nombre_entidad_financiera" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProducts = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "descripcion" : "aeiou",
  "precio" : "aeiou",
  "estado" : 123456789,
  "id_categoria" : 123456789,
  "id_cliente_venta" : 123456789,
  "id" : 123456789,
  "nombre" : "aeiou",
  "fecha_reg" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProductsCategories = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "descripcion" : "aeiou",
  "id" : 123456789,
  "nombre" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProductsCategoriesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "descripcion" : "aeiou",
  "id" : 123456789,
  "nombre" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProductsClients_salesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "descripcion" : "aeiou",
  "precio" : "aeiou",
  "estado" : 123456789,
  "id_categoria" : 123456789,
  "id_cliente_venta" : 123456789,
  "id" : 123456789,
  "nombre" : "aeiou",
  "fecha_reg" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProductsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "descripcion" : "aeiou",
  "precio" : "aeiou",
  "estado" : 123456789,
  "id_categoria" : 123456789,
  "id_cliente_venta" : 123456789,
  "id" : 123456789,
  "nombre" : "aeiou",
  "fecha_reg" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProductsProducts_categoriesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "descripcion" : "aeiou",
  "precio" : "aeiou",
  "estado" : 123456789,
  "id_categoria" : 123456789,
  "id_cliente_venta" : 123456789,
  "id" : 123456789,
  "nombre" : "aeiou",
  "fecha_reg" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getShopping_carts = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "code_venta" : "aeiou",
  "precio" : "aeiou",
  "id" : 123456789,
  "id_articulo" : 123456789,
  "fecha_detalle" : "2000-01-23T04:56:07.000+00:00"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getShopping_cartsVentaCod_venta = function(args, res, next) {
  /**
   * parameters expected in the args:
  * cod_venta (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "code_venta" : "aeiou",
  "precio" : "aeiou",
  "id" : 123456789,
  "id_articulo" : 123456789,
  "fecha_detalle" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getShops = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "tipo_moneda" : "aeiou",
  "id_cliente_tienda" : 123456789,
  "responsable" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "email" : "aeiou",
  "pais" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getShopsCliente_tiendaId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "tipo_moneda" : "aeiou",
  "id_cliente_tienda" : 123456789,
  "responsable" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "email" : "aeiou",
  "pais" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getShopsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo_moneda" : "aeiou",
  "id_cliente_tienda" : 123456789,
  "responsable" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "email" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getTransactions = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "fecha_exp_tarjeta" : "aeiou",
  "cvv2" : 123456789,
  "monto" : "aeiou",
  "pagado" : 123456789,
  "cod_venta" : "aeiou",
  "id_cliente_compra" : 123456789,
  "id" : 123456789,
  "id_forma_pago" : 123456789,
  "num_tarjeta" : 123456789,
  "fecha_reg" : "2000-01-23T04:56:07.000+00:00",
  "id_tienda" : 123456789
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getTransactionsId_tienda = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_tienda (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "fecha_exp_tarjeta" : "aeiou",
  "cvv2" : 123456789,
  "monto" : "aeiou",
  "pagado" : 123456789,
  "cod_venta" : "aeiou",
  "id_cliente_compra" : 123456789,
  "id" : 123456789,
  "id_forma_pago" : 123456789,
  "num_tarjeta" : 123456789,
  "fecha_reg" : "2000-01-23T04:56:07.000+00:00",
  "id_tienda" : 123456789
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * $size (Long)
  * $page (Double)
  * $sort (String)
  * name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersType_usersId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postAdwords = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Adwords)
  **/
    var examples = {};
  examples['application/json'] = {
  "url_web" : "aeiou",
  "tipo_anuncio" : "aeiou",
  "id_cliente_anuncio" : 123456789,
  "nombre_anuncio" : "aeiou",
  "id" : 123456789,
  "vistas" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postAuthLogin = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (AnonymousRepresentation)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postAuthLogout = function(args, res, next) {
  /**
   * parameters expected in the args:
  * xApiToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postClient_adwords = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Client_adwords)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postClient_purchases = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Client_purchases)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postClient_sales = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Client_sales)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postClient_shops = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Client_shops)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postPayments = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Payments)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo_tarjeta" : "aeiou",
  "id_users" : "aeiou",
  "nombre_entidad_financiera" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postProducts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Products)
  **/
    var examples = {};
  examples['application/json'] = {
  "descripcion" : "aeiou",
  "precio" : "aeiou",
  "estado" : 123456789,
  "id_categoria" : 123456789,
  "id_cliente_venta" : 123456789,
  "id" : 123456789,
  "nombre" : "aeiou",
  "fecha_reg" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postProductsCategories = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Category)
  **/
    var examples = {};
  examples['application/json'] = {
  "descripcion" : "aeiou",
  "id" : 123456789,
  "nombre" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postShopping_carts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Shopping_carts)
  **/
    var examples = {};
  examples['application/json'] = {
  "code_venta" : "aeiou",
  "precio" : "aeiou",
  "id" : 123456789,
  "id_articulo" : 123456789,
  "fecha_detalle" : "2000-01-23T04:56:07.000+00:00"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postShops = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Shops)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo_moneda" : "aeiou",
  "id_cliente_tienda" : 123456789,
  "responsable" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "email" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postTransactionsId_tienda = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_tienda (Long)
  * body (Transactions)
  **/
    var examples = {};
  examples['application/json'] = {
  "fecha_exp_tarjeta" : "aeiou",
  "cvv2" : 123456789,
  "monto" : "aeiou",
  "pagado" : 123456789,
  "cod_venta" : "aeiou",
  "id_cliente_compra" : 123456789,
  "id" : 123456789,
  "id_forma_pago" : 123456789,
  "num_tarjeta" : 123456789,
  "fecha_reg" : "2000-01-23T04:56:07.000+00:00",
  "id_tienda" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Users)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putAdwordsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Adwords)
  **/
    var examples = {};
  examples['application/json'] = {
  "url_web" : "aeiou",
  "tipo_anuncio" : "aeiou",
  "id_cliente_anuncio" : 123456789,
  "nombre_anuncio" : "aeiou",
  "id" : 123456789,
  "vistas" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putClient_adwordsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Client_adwords)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putClient_purchasesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Client_purchases)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putClient_salesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Client_shops)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putClient_shopsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Client_shops)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putPaymentsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Payments)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo_tarjeta" : "aeiou",
  "id_users" : "aeiou",
  "nombre_entidad_financiera" : "aeiou",
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putProductsCategoriesId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Category)
  **/
    var examples = {};
  examples['application/json'] = {
  "descripcion" : "aeiou",
  "id" : 123456789,
  "nombre" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putProductsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Products)
  **/
    var examples = {};
  examples['application/json'] = {
  "descripcion" : "aeiou",
  "precio" : "aeiou",
  "estado" : 123456789,
  "id_categoria" : 123456789,
  "id_cliente_venta" : 123456789,
  "id" : 123456789,
  "nombre" : "aeiou",
  "fecha_reg" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putShopsId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Shops)
  **/
    var examples = {};
  examples['application/json'] = {
  "tipo_moneda" : "aeiou",
  "id_cliente_tienda" : 123456789,
  "responsable" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "email" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.putUsersId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (Users)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "ciudad" : "aeiou",
  "direccion" : "aeiou",
  "id" : 123456789,
  "telefono" : 123456789,
  "tipo_usuario" : "aeiou",
  "nombre" : "aeiou",
  "email" : "aeiou",
  "dni" : "aeiou",
  "pais" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

