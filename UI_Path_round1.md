DS ALgo round
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/ 

console.log(searchRange([5,7,7,8,8,10], 8));
output [3, 4]



REACT coding UIPath

Create an app in any framework of your choice with the below specifications: 

Provided:
1) API to fetch list of image objects, which contains: download_url, author.
    https://picsum.photos/v2/list?page=1
    ?page is used to specify the page number in the results
2) UX for the app

Expectations:
1) Show a grid of Tiles. Each Tile contains image and author name below the image. The image aspect ratio should be maintained in the tile. All Tiles should be of the same width and height.
2) When the user scrolls down, data(image + author) for the next page should be fetched and Tiles should be shown on UI, and so on. (PAGINATION)
3) The user should be able to filter the Tiles based on author name. Three filters tabs should be provided: A-H, I-P, Q-Z.
4) On click of a specific filter tab, Tile(images + author) whose author's first name starts with the specified letter range should be displayed (in alphabetical order: OPTIONAL).
5) On click of an image, it should show up a modal with image zoomed in as per given UX.
6) The modal should have a “X” button on the top right corner, clicking which should close the modal.
7) The modal should have a backdrop (with opacity value as per UX). On clicking the backdrop, the modal should be closed.
8) UI should be responsive.

NOTES:
- Implementation should be as close as possible to the UX provided.



