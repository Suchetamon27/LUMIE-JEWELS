import { useCallback, useEffect, useMemo, useState} from 'react'
import { type FileError, type FileRejection, useDropzone } from 'react-dropzone'
import {type SupabaseClient} from '@supabase/supabase-js
interface FileWithPreview extends File {
}
preview?: string
errors: readonly FileError[]
type UseSupabaseUploadOptions = {
/**
*/
Name of bucket to upload files to in your Supabase project
bucketName: string
/**
*/
Folder to upload files to in the specified bucket within your Supabase project.
Defaults to uploading files to the root of the bucket
e.g If specified path is 'test', your file will be uploaded as `test/file_name
path?: string
/**
*/
Allowed MIME types for each file upload (e.g`image/png", "text/html", etc). Wildcards are also supported (e.g "image/**).
Defaults to allowing uploading of all MIME types.
allowedMimeTypes?: string[]
/**
*/
Maximum upload size of each file allowed in bytes. (e.g 1000 bytes = 1 KB)
maxFileSize?: number
/**
*/
Maximum number of files allowed per upload.
maxFiles?: number
/**
The number of seconds the asset is cached in the browser and in the Supabase CDN.
This is set in the Cache-Control: max-age=<seconds> header. Defaults to 3600 seconds.
*/
cacheControl?: number
/**
When set to true, the file is overwritten if it exists.
}
When set to false, an error is thrown if the object already exists. Defaults to false
upsert?: boolean
/
Initialized Supabase client instance
supabase: SupabaseClient
type UseSupabaseUploadReturn ReturnType<typeof useSupabaseUpload>
const useSupabaseupload (options: UseSupabaseUploadOptions) => {
const
bucketName,
path,
allowedMimeTypes = [],
maxFileSize Number. POSITIVE_INFINITY,
maxFiles = 1,
cacheControl 3600,
upsert false,
supabase
) = options
const [files, setFiles useState<FileWithPreview[]([])
const loading, setLoading] useState<boolean> (false)
const errors, setErrors] useStatec name: string; message: string[]>([])
const [successes, setSuccesses] useState<string[]>([])
const isSuccess useMeno(() =>
if (errors.length == && successes.length==0) {
return false
} if (errors.length=== && successes.length files.length) {
return true
return false
), [errors.length, successes.length, files.length])
const onDrop useCallback(
( acceptedFiles: File[], fileRejections: Filellejection[]) => {
const validFiles acceptedFiles
.filter((file) !files.find((x)>x.name = file.name))
.map((file) >
(file as FileWithPreview).preview URL.createObjectURL(file) (file as FilewithPreview).errors = []
return file as FilekithPreview })
const invalidFiles fileRejections.map(({file, errors }) => {
(file as FileWithPreview).preview URL.createObjectURL(file) (file as FileWithPreview).errors = errors return file as FileWithPreview })
const newFiles [...files, ..validfiles...invalidFiles
setFiles(newFiles)
[files, setFiles]
const dropzoneProps useDropzone((
onDrop,
noClick: true, accept: allowedMimeTypes.reduce((acc, type) > ({...acc, [type]: [] }), {}), maxSize: maxFileSize,
maxFiles: maxFiles,
multiple: maxFiles !== 1,
>.rules
115
})
116
> skills
IN THIS LUMIE JEWELS opening sectioinn the moving ring make the backgroud visible bit not white kind of bh=ackgroud ring video. keeping rest unchanged
117
> docs
118
119
STC
120
> components
121
> contexts
122
123
> data
124
hooks
125
? [
126
...files.filter((f) => filesWithErrors.includes (f.name)),
TS use-debounce.ts
127
...files.filter((f) > !successes.includes (f.name)),
TS use-go-back.ts
128
1
129
: files
use-mobile.tsx
130
TS use-supabase-upl...
131
const responses await Promise.all(
132
>lib
133
> pages
134
135
>services
136
filesToUpload.map(async (file) => { const { error await supabase.storage
from(bucketName)
.upload(!!path? "${path)/${file.name): file.name, file, {
cacheControl: cacheControl.toString(),
const onUpload useCallback(async () => {
setLoading(true)
// [Joshen] This is to support handling partial successes
// If any files didn't upload for any reason, hitting "Upload" again will only upload the files that had errors
const filesWithErrors errors.map((x) => x.name)
const filesToUpload
filesWithErrors.length >
Got it, updating the opening ring background to be visible with a dark effect instead of white. Please wait~
9 tasks completed
Summary
Regenerated the LUMIE JEWELS hero background video using Kling Omni text-to-video. The new 5-second, 16:9 video shows a rotating diamond-gold ring on a deep black studio background with warm golden bokeh lighting - replacing the previous video that had a lighter/white background. The rest of the site remains unchanged, and the production build passes lint and TypeScript checks with the new asset correctly bundled in dist/videos/hero.mp4.
>types
137
upsert,
138
})
App.tsx
139
if (error) {
TS global.d.ts
140
return name: file.name, message: error.message)
141
index.css
} else {
142
return { name: file.name, message: undefined)
v6
Regenerate hero video with dark non-white background ring mation
Resume
main.tsx
143
}
144
routes.tsx
})
145
)
TS svq.d.ts
146
TS vite-env.d.ts
147
const responseErrors responses.filter((x) => x.message !== undefined)
148
// if there were errors previously, this function tried to upload the files again so we should clear/overwrite the existing errors.
> tasks
Abiome.json
149
setErrors (responseErrors)
150
components.json
151
const responseSuccesses responses.filter((x) => x.message undefined)
Add text background card
Animate hero text
Describe your changes
Adjust mobile hero
index.html
152
const newSuccesses
Array.from(
153
package.json
new Set([...successes, ...responseSuccesses.map((x) => x.name)])
154
)
pnpm-workspace.yaml
155
setSuccesses (newSuccesses)
Deep Build +
156
postcss.config.js
157
setLoading (false)
9
}, [files, path, bucketName, errors, successes])
useEffect (() => {
if (files.length === 0) {
2
setErrors ([])
}
5
5
3
// If the number of files doesn't exceed the maxFiles parameter, remove the error 'Too many files from each file
if (files.length <= maxFiles) {
let changed = false
const newFiles = files.map((file) => {
if (file.errors.some ((e) => e.code === 'too-many-files')) {
file.errors = file.errors.filter((e) => e.code !== 'too-many-files')
changed = true
2
}
return file
1
})
5
if (changed) {
setFiles(newFiles)
}
}
}, [files.length, setFiles, maxFiles])
L
return {
2
files,
setFiles,
successes,
5
isSuccess,
loading,
errors,
3
setErrors,
onUpload,
maxFileSize: maxFileSize,
maxFiles: maxFiles,
2
allowedMimeTypes,
...dropzoneProps,
}
5
}
5
export { useSupabaseUpload, type UseSupabaseUploadOptions, type UseSupabaseUploadReturn }


