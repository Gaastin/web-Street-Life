const script = `-- Street Life Hitbox Script
-- Creator: @dev Gaastin
print("Street Life Hitbox Loaded")
`;
document.getElementById("script-code").textContent = script;

function copyScript(){
navigator.clipboard.writeText(script)
.then(()=>alert("SCRIPT COPIED"))
.catch(()=>alert("ERROR"));
}
