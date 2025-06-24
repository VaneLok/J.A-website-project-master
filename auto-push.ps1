cd "C:\DevProjects\J.A-website-project-master"

# Stage all changes
git add .

# Only commit if there are changes
if (-not (git diff --cached --quiet)) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Auto-update: $timestamp"
    git push origin main
} else {
    Write-Host "No changes to commit."
}
