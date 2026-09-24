import {FormCreatePlan} from "@/components/FormCreatePlan";
/* Debe tener fondo gris claro el contenido a la izquierda y tenerun padding de 2 unidades y estar centrado en la pantalla, con un título que diga "Crear un nuevo plan" y un subtítulo que diga "Llena el formulario para crear un nuevo plan". Debe importar el componente FormCreatePlan y renderizarlo debajo del subtítulo. */
export default function CreatePlanPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 p-2">
            <h1 className="text-4xl font-bold mb-4">Crear un nuevo plan</h1>
            <p className="text-lg text-gray-600 mb-8">Llena el formulario para crear un nuevo plan</p>
            <FormCreatePlan />
        </div>
    );
}