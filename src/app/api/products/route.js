import { NextResponse } from "next/server";
import { pool } from "@/config/db";
export async function GET(req, res) {
  /*
    para guardar una fecha
            const [rows] = await pool.query("SELECT NOW()");
        return NextResponse.json({
            message: "obteniendo productos " + rows[0]["NOW()"],
        });
    */
  try {
    const results = await pool.query("SELECT * FROM product");
    return NextResponse.json(results[0]);
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
export async function POST(req, res) {
  try {
    const { name, description, price } = await req.json();
    const result = await pool.query("INSERT INTO product SET ? ", {
      name,
      description,
      price,
    });
    return NextResponse.json({
      name,
      description,
      price,
      id: result[0].insertId,
    });
  } catch (error) {
    console.log(error);
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
