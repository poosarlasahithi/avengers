$ProgressPreference = 'SilentlyContinue'
$dest = "C:\Users\Sahithi\git"
if (-not (Test-Path "$dest\cmd\git.exe")) {
    New-Item -ItemType Directory -Force -Path $dest | Out-Null
    $zipPath = "$dest\mingit.zip"
    Write-Host "Downloading MinGit with curl..."
    curl.exe -L "https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/MinGit-2.44.0-64-bit.zip" -o $zipPath
    Write-Host "Extracting MinGit..."
    Expand-Archive -Path $zipPath -DestinationPath $dest -Force
    Remove-Item $zipPath -Force
}
Write-Host "MinGit path status:" (Test-Path "$dest\cmd\git.exe")
