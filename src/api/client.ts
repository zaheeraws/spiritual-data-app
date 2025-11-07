import axios from "axios";
import { Item } from "../types";

const API_BASE = ""; 

export async function fetchItems(): Promise<Item[]> {
    try {
      if (!API_BASE) {
        const data = await import("../mock/data.json");
        return data.default as Item[];
      }
      const res = await axios.get<Item[]>(`${API_BASE}/items`);
      return res.data;
    } catch (err) {
      console.error("API error:", err);
      return [];
  }
}