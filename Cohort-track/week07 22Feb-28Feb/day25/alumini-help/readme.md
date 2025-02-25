Since Git is detecting `light-drag-onoff` as an embedded Git repository, so i need to **properly add it as a submodule**.
and i learn a new thing from fresh, so if you also want to learn, I'll guide you step by step to **add a Git submodule properly** and ensure it works without issues. 🚀  

---

### ✅ **Step 1: Navigate to Your Main Repository**
First, go to your main repo folder where you want to add the submodule:  
```bash
cd /e/Projects/web-dev-cohort
```
Ensure your working directory is clean:
```bash
git status
```

---

### ✅ **Step 2: Add the Submodule**
Run the following command to add the Git submodule:  
```bash
git submodule add https://github.com/Muksiduz/light-drag-onoff "Cohort-track/week07 22Feb-28Feb/day25/alumini-help/light-drag-onoff"
```
This will:  
- Clone the submodule repository inside the given path  
- Track it as a submodule  

---

### ✅ **Step 3: Initialize and Update the Submodule**
Run the following command to make sure the submodule is properly set up:
```bash
git submodule update --init --recursive
```

---

### ✅ **Step 4: Commit and Push the Changes**
After adding the submodule, you need to commit the changes:
```bash
git add .gitmodules Cohort-track/week07\ 22Feb-28Feb/day25/alumini-help/light-drag-onoff
git commit -m "Added light-drag-onoff as a submodule"
git push origin main
```

---

### ✅ **Step 5: Verify the Submodule**
To check if the submodule is correctly linked, run:
```bash
git submodule status
```
It should show the submodule with its commit hash.

---

### ✅ **Step 6: Cloning the Repository with Submodules**
Next time, when you (or someone else) clones your main repo, use:
```bash
git clone --recurse-submodules <your-main-repo-url>
```
If they already cloned it but didn't initialize submodules, they should run:
```bash
git submodule update --init --recursive
```

---

### 🔥 **Now your submodule is properly added and tracked!**
Let me know if you run into any issues. 🚀

My logs that i tried
```bash
girir@GIRI MINGW64 /e/Projects/web-dev-cohort/Cohort-track/week07 22Feb-28Feb (main)
$ cd day25/alumini-help/

girir@GIRI MINGW64 /e/Projects/web-dev-cohort/Cohort-track/week07 22Feb-28Feb/day25/alumini-help (main)
$ git clone https://github.com/Muksiduz/light-drag-onoff
Cloning into 'light-drag-onoff'...
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (11/11), done.
Rremote: Total 15 (delta 4), reused 15 (delta 4), pack-reused 0 (from 0)
Receiving objects: 100% (15/15), 15.20 KiB | 2.17 MiB/s, done.
Resolving deltas: 100% (4/4), done.

girir@GIRI MINGW64 /e/Projects/web-dev-cohort/Cohort-track/week07 22Feb-28Feb/day25/alumini-help (main)
$ cd /e/Projects/web-dev-cohort

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    Cohort-track/week07 22Feb-28Feb/day24/alumini-help/readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Cohort-track/week07 22Feb-28Feb/day25/alumini-help/

no changes added to commit (use "git add" and/or "git commit -a")

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git submodule add https://github.com/Muksiduz/light-drag-onoff "Cohort-track/week07 22Feb-28Feb/day25/alumini-help/light-drag-onoff"
Adding existing repo at 'Cohort-track/week07 22Feb-28Feb/day25/alumini-help/light-drag-onoff' to the index
warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git submodule update --init --recursive

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git add .gitmodules Cohort-track/week07\ 22Feb-28Feb/day25/alumini-help/light-drag-onoff
git commit -m "Added light-drag-onoff as a submodule"
git push origin main
[main f373363] Added light-drag-onoff as a submodule
 2 files changed, 4 insertions(+)
 create mode 160000 Cohort-track/week07 22Feb-28Feb/day25/alumini-help/light-drag-onoff
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 750 bytes | 150.00 KiB/s, done.
Total 7 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/girirajlovevanshi/web-dev-cohort.git
   6f77443..f373363  main -> main

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git add .gitmodules Cohort-track/week07\ 22Feb-28Feb/day25/alumini-help/light-drag-onoff
git commit -m "Added light-drag-onoff as a submodule"
git push origin main
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        deleted:    Cohort-track/week07 22Feb-28Feb/day24/alumini-help/readme.md
        modified:   Cohort-track/week07 22Feb-28Feb/day25/alumini-help/light-drag-onoff (modified content)      

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Cohort-track/week07 22Feb-28Feb/day25/alumini-help/readme.md

no changes added to commit (use "git add" and/or "git commit -a")
Everything up-to-date
```