// src/common/utils/handle-service-error.ts
import { RpcException } from '@nestjs/microservices';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { HttpStatus, Logger } from '@nestjs/common';

const logger = new Logger('ServiceErrorHandler');

export function handleServiceError(error: any): never {
    if (error instanceof RpcException) {
        throw error;
    }

    if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P2000':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Valor demasiado largo para el campo',
                });
            case 'P2001':
                throw new RpcException({
                    status: HttpStatus.NOT_FOUND,
                    message: 'No se encontró el registro solicitado',
                });
            case 'P2002':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'El recurso ya existe (violación de unicidad)',
                });
            case 'P2003':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Violación de clave foránea (referencia inválida)',
                });
            case 'P2004':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Violación de una restricción en la base de datos',
                });
            case 'P2005':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Tipo de valor incorrecto para el campo',
                });
            case 'P2006':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Valor inválido para uno de los campos',
                });
            case 'P2007':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Error de validación en la base de datos',
                });
            case 'P2008':
                throw new RpcException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error al leer la configuración de Prisma',
                });
            case 'P2009':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Consulta inválida a la base de datos',
                });
            case 'P2010':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Argumentos inválidos en la consulta',
                });
            case 'P2011':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Requiere al menos un valor no nulo',
                });
            case 'P2012':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Campo requerido no proporcionado',
                });
            case 'P2013':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Faltan argumentos requeridos en la consulta',
                });
            case 'P2014':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Relación inválida entre registros',
                });
            case 'P2015':
                throw new RpcException({
                    status: HttpStatus.NOT_FOUND,
                    message: 'No se encontró el registro solicitado',
                });
            case 'P2016':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Campo inválido especificado en la operación',
                });
            case 'P2017':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Relación incorrecta entre registros',
                });
            case 'P2018':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Ruta de conexión inválida en la base de datos',
                });
            case 'P2021':
                throw new RpcException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Tabla o modelo no encontrado en la base de datos',
                });
            case 'P2022':
                throw new RpcException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Columna no encontrada en la base de datos',
                });
            case 'P2023':
                throw new RpcException({
                    status: HttpStatus.BAD_REQUEST,
                    message: 'Consulta con parámetros incorrectos',
                });
            case 'P2024':
                throw new RpcException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Se agotó el número máximo de conexiones a la base de datos',
                });
            case 'P2025':
                throw new RpcException({
                    status: HttpStatus.NOT_FOUND,
                    message: 'No se encontró el recurso para actualizar o eliminar',
                });
            default:
                logger.error(`Error Prisma desconocido: ${error.code}`, error);
                throw new RpcException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error de base de datos inesperado',
                });
        }
    }

    logger.error('Error inesperado:', error);
    throw new RpcException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Ocurrió un error inesperado en el microservicio',
    });
}
