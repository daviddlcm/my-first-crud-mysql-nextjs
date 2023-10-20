import { NextResponse } from "next/server";
import { pool } from "@/config/db";
export async function GET(req, { params }) {
  //res obtengo lo que me da el navegador
  //res lo puedo cambiar solo por {params} para solo traer el body esto en los parametros de funcion
  //req lo que le voy a enviar al navegador
  //res.params.id para obtener el id de la url tengo que entrar al params porque es un objeto y luego a la propiedad id
  //req.method para obtener el metodo de la peticion si es un GET o DELETE o POST etc
  //console.log(res.params.id)
  //console.log(req.method)
  try {
    const result = await pool.query("SELECT * FROM product WHERE id = ? ", [
      params.id,
    ]);
    if (result[0].length === 0) {
      return NextResponse.json(
        {
          message: "no se encontro el producto",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const result = await pool.query("UPDATE product SET ? WHERE id = ?", [
      data,
      params.id,
    ]);
    if (result[0].affectedRows == 0) {
      return NextResponse.json(
        {
          message: "product no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    const updateProduct = await pool.query(
      "SELECT * FROM product WHERE id = ?",
      [params.id]
    );
    return NextResponse.json(updateProduct[0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const result = await pool.query("DELETE FROM product WHERE id = ?", [
      params.id,
    ]);

    if (result[0].affectedRows == 0) {
      return NextResponse.json(
        {
          message: "producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
