
$(document).ready(function () {
    $('#addImage').click(function () {
      var imageUrl = $('#imageUrl').val();
      var cardHtml = `<div class="card mt-5 ml-5" style="width: 18rem">
      <img
        src="${imageUrl}"
        class="card-img-top"
        alt="..." />
      <div
        class="card-body d-flex justify-content-between align-items-center">
        <a
          class="card-title"
          download="image.jpg"
          href="${imageUrl}"
          >Download</a
        >
        <button class="btn btn-primary">Like 0</button>
      </div>
    </div>`;
      $('#imageContainer').append(cardHtml);
    });
  });
   