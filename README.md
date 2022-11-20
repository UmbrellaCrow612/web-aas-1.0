# PlanetScale db connect 


Make db in planetScale 

```
pscale db create star-app --region <REGION>
```

Set up branch

```
pscale branch create star-app initial-setup
```

Run the local branch in the terminal 

```
pscale connect dbName dbBranchName --port 3309
```

Push schema changes here 

```
npx prisma db push
```
