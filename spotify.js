                function get_spotify() {
                    $.ajax({
                        type: 'POST',
                        url: './last.fm.php',
                        data: { request: 'true' },
                        success: function(reply) {
                            $('.now-playing').html("<p>" + reply + "</p>");
                        }
                    });
                }
                window.onload = get_spotify;