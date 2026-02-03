const script = `-- Street Life Hitbox Script
print("--[[ 
    Script Loader + SaveInstance
    Comunidad: XModel / gaastindelay
    Uso exclusivo en executors
]]

-- 
local success, err = pcall(function()
    loadstring(game:HttpGetAsync("https://pastebin.com/raw/3gmnm1mn"))()
end)

-- 
if not success then
    warn("[XModel] Error al ejecutar el script:", err)
end

-- 
task.wait(1)

-- 
if saveinstance then
    saveinstance({
        decomptype = "new"
    })
    print("[XModel] SaveInstance completado correctamente.")
else
    warn("[XModel] saveinstance no está disponible en este executor.")
end")
`;
document.getElementById("script-code").textContent = script;

function copyScript(){
navigator.clipboard.writeText(script)
.then(()=>alert("SCRIPT COPIED"))
.catch(()=>alert("ERROR"));
}

