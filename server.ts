import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
import { instantiate } from "https://raw.githubusercontent.com/luoyjx/wasmbuild-demo-deno/main/lib/rs_lib.generated.js";

const { add } = await instantiate();

serve((req: Request) => new Response(add(1, 2)));