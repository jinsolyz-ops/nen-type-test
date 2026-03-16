import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type {
  NenResult,
  NenResultInsert,
  NenTypeKey,
  PageViewInsert,
} from "@/types";

let supabaseClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (supabaseClient) {
    return supabaseClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured.");
  }

  if (!supabaseAnonKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not configured.");
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseClient;
}

export async function saveResult(topType: NenTypeKey): Promise<string> {
  const shareId = Math.random().toString(36).substring(2, 10);
  const payload: NenResultInsert = { share_id: shareId, top_type: topType };
  const { error } = await getSupabaseClient().from("nen_results").insert(payload);

  if (error) {
    throw error;
  }

  return shareId;
}

export async function getResultByShareId(shareId: string): Promise<NenResult> {
  const { data, error } = await getSupabaseClient()
    .from("nen_results")
    .select("*")
    .eq("share_id", shareId)
    .single();

  if (error) {
    throw error;
  }

  return data as NenResult;
}

export async function trackPageView(path: PageViewInsert["path"]): Promise<void> {
  const payload: PageViewInsert = { path };

  try {
    await getSupabaseClient().from("page_views").insert(payload);
  } catch {
    return;
  }
}
