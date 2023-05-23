# CH en terminal para poder manejar el repositorio desde local

## pasos a seguir

### Terminal local Linux

Pasos a seguir en un entorno Linux:

```

sudo apt update
sudo apt install gh
sudo apt-get update
gh auth login
gh repo clone janebeta7/uah2223-visualizacion-interactiva_janebeta7
cd uah2223-visualizacion-interactiva_janebeta7
ls
git commit
ls
gh auth login
ls
git commit
git add .
git pull
 ls
 git push
git commit
git add howto.md
git commit
git push
git config --local credential.helper ""
git push
git config --local credential.helper ""
git push
gh auth login
 gh repo create
git add .

  510  git commit -m "First commit."
  512  git push
```
ATENCION! cuando pida password poner el token y listo

### Terminal local Windows

En Windows los pasos a seguir son:

- Descargar *gh* en su [web](https://cli.github.com/).

- Cerrar la terminal (si la teníamos abierta) y abrirla de nuevo.

- Acceder a la carpeta donde queremos clonar el repositorio.

- Loguearse en github:

```
gh auth login
```

- Responder a las siguientes preguntas:

 *What account do you want to log into?* GitHub.com
 
 *What is your preferred protocol for Git operations?* HTTPS
 
 *Authenticate Git with your GitHub credentials?* Yes
 
 *How would you like to authenticate GitHub CLI?* Paste an authentication token
 
 - Pegamos el token que hemos generado previamente en la web de [Github](https://github.com/settings/tokens).
 
 - Clonar el repositorio con el siguiente comando:
 
 ```
 gh repo clone mpvdes/uah2223-visualizacion-interactiva
 ```
