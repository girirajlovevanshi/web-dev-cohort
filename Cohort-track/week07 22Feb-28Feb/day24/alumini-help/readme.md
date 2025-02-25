Since Git is detecting `light-drag-onoff` as an embedded Git repository, so i need to **properly add it as a submodule**.
and i learn a new thing here is,
---

### ✅ **Step-by-Step Guide to Adding it as a Submodule**
#### **1️⃣ Remove the Existing Folder from Git Index (if needed)**
Since Git already recognizes it as an embedded repo, remove it from tracking before adding it as a submodule.

```bash
git rm --cached "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
```

---

#### **2️⃣ Add it as a Submodule**
Now, add `light-drag-onoff` as a submodule:

```bash
git submodule add <repo-url> "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
```

Replace `<repo-url>` with the actual repository URL for `light-drag-onoff`.

For example:
```bash
git submodule add https://github.com/your-username/light-drag-onoff.git "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
```

---

#### **3️⃣ Commit the Changes**
Once added, commit the submodule reference:

```bash
git add .gitmodules "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
git commit -m "Added light-drag-onoff as a submodule"
git push origin main
```

---

#### **4️⃣ Clone the Repository with Submodules (for Future Use)**
If someone clones your repository, they should use:

```bash
git clone --recurse-submodules <your-repo-url>
```

If they have already cloned it, they can run:

```bash
git submodule update --init --recursive
```

---

### 🚀 **Final Check**
Run:
```bash
git submodule status
```
If `light-drag-onoff` appears in the list, it is successfully added as a submodule! 🎉

My logs that i tried
```bash
girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git rm --cached "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
error: the following file has staged content different from both the
file and the HEAD:
    Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff
(use -f to force removal)

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git rm --cached -f "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
rm 'Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff'

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git submodule add https://github.com/girirajlovevanshi/light-drag-onoff.git "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/lig
ht-drag-onoff"
Adding existing repo at 'Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff' to the index
warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git add .gitmodules "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
git commit -m "Added light-drag-onoff as a submodule"
git push origin main
[main 19d200e] Added light-drag-onoff as a submodule
 3 files changed, 4 insertions(+), 1 deletion(-)
 rename Cohort-track/week07 22Feb-28Feb/day24/{ => alumini-help}/light-drag-onoff (100%)
warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it

girir@GIRI MINGW64 /e/Projects/web-dev-cohort (main)
$ git add .gitmodules "Cohort-track/week07 22Feb-28Feb/day24/alumini-help/light-drag-onoff"
git commit -m "Added light-drag-onoff as a submodule"
git push origin main
[main 19d200e] Added light-drag-onoff as a submodule
 3 files changed, 4 insertions(+), 1 deletion(-)
 rename Cohort-track/week07 22Feb-28Feb/day24/{ => alumini-help}/light-drag-onoff (100%)
git push origin main
[main 19d200e] Added light-drag-onoff as a submodule
 3 files changed, 4 insertions(+), 1 deletion(-)
 rename Cohort-track/week07 22Feb-28Feb/day24/{ => alumini-help}/light-drag-onoff (100%)
 3 files changed, 4 insertions(+), 1 deletion(-)
 rename Cohort-track/week07 22Feb-28Feb/day24/{ => alumini-help}/light-drag-onoff (100%)
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 806 bytes | 268.00 KiB/s, done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 806 bytes | 268.00 KiB/s, done.
Total 7 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 806 bytes | 268.00 KiB/s, done.
Total 7 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Total 7 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/girirajlovevanshi/web-dev-cohort.git
   0410df3..19d200e  main -> main
```