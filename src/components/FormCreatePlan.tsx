import Link from "next/link";
import { createPlan } from "@/services/plans";



/* Función para crear un plan. Se despliega el formulario y se usa el servicio en plans.ts, se deben cumplir las siguientes restricciones:
• El nombre debe tener entre 2 y 50 caracteres
• El precio estimado debe ser mayor a 0
• La duración debe ser un número entero
• La descripción del plan debe tener menos de 600 caracteres
• Las recomendaciones pueden ser opcionales
Letras en color negro fon todo centrado

*/
export default function FormCreatePlan() {
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const estimatedPrice = parseFloat(formData.get("estimatedPrice") as string);
        const address = formData.get("address") as string;
        const image = formData.get("image") as string;
        const description = formData.get("description") as string;
        const estimatedTime = parseInt(formData.get("estimatedTime") as string);
        const recomendations = formData.get("recomendations") as string;
        
        // Validaciones
        if (name.length < 2 || name.length > 50) {
            alert("El nombre debe tener entre 2 y 50 caracteres");
            return;
        }
        if (estimatedPrice <= 0) {
            alert("El precio estimado debe ser mayor a 0");
            return;
        }
        if (!Number.isInteger(estimatedTime)) {
            alert("La duración debe ser un número entero");
            return;
        }
        if (description.length > 600) {
            alert("La descripción del plan debe tener menos de 600 caracteres");
            return;
        }

        // Aquí se llamaría al servicio para crear el plan
        try {
            const creatorId = "123"; // Este valor debería venir del usuario autenticado
            const planId = await createPlan(name, estimatedPrice, address, image, description, estimatedTime, recomendations, creatorId);
            alert(`Plan creado con éxito! ID: ${planId}`);
        } catch (error) {
            console.error(error);
            alert("Hubo un error al crear el plan. Por favor, inténtalo de nuevo.");
        }
    }

    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <form className="flex flex-col w-full max-w-md space-y-4">
                <label className="text-lg font-semibold text-black">Imagen del plan</label>
                <input 
                    required
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    type="text" 
                    placeholder="https://..." 
                    />
                <label className="text-lg font-semibold text-black">Nombre del plan</label>
                <input 
                    required 
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    type="text" 
                    placeholder="Ej. Tarde de padel" 
                    minLength={2}
                    maxLength={50}
                    />
                <label className="text-lg font-semibold text-black">Dirección del plan</label>
                <input 
                    required 
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    type="text" 
                    placeholder="Ej. Bahía de brisas" 
                    />
                <label className="text-lg font-semibold text-black  ">Precio estimado</label>
                <input 
                    required 
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    type="number" 
                    placeholder="Ej. 250000" 
                    min="0"
                    />
                <label className="text-lg font-semibold text-black">Duración (minutos)</label>
                <input 
                    required 
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    type="number" 
                    placeholder="Ej. 120" 
                    min="0"
                    max="10000"
                    />
                <label className="text-lg font-semibold text-black">Descripción del plan</label>
                <textarea
                    required
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    placeholder="Cuentale a todos los detalles del plan">    
                    
                </textarea>
                <label className="text-lg font-semibold text-black  ">Recomendaciones (opcional)</label>
                <textarea 
                    className="border border-gray-300 rounded-md p-2 text-gray-600" 
                    placeholder="Recomendaciones (opcional)">
                </textarea>
                
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                        Crear plan
                </button>
            </form>
            <Link href="/plans" className="mt-4 text-blue-500 hover:underline">
                Volver a la lista de planes
            </Link>
        </div>        
    );
}



export {
    FormCreatePlan
}