import { Item } from "@/lib/types/elastic";

export default async function getItem(id: string): Promise<Item | null> {
    try {
        const response = await fetch(`/api/items?id=${id}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar item: ${response.status} ${response.statusText}`);
        }
        const item: Item = await response.json();
        return item;
    } catch (error) {
        console.error('Erro ao buscar item:', error);
        return null;
    }
}